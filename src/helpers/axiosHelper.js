import axios from "axios";
const userEP =
  import.meta.env.VITE_APP_ROOT_SERVER + "/api/v1/users/renew-accesjwt";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcesser = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJwt,
}) => {
  const headers = {
    Authorization: isPrivate
      ? isRefreshJwt
        ? getRefreshJWT()
        : getAccessJWT()
      : null,
  };
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    const message = error?.response?.data?.message ?? error.message;

    if (message === "jwt expired") {
      // now user refreshJWT to request new accessJWT
      const token = await renewAccessJWT();
      // re call back same api processer
      if (token) {
        return apiProcesser({ method, url, data, isPrivate });
      }

      //clear the tokens
      localStorage.removeItem("refreshJWT");
      sessionStorage.removeItem("accessJWT");
    }
    return {
      status: "error",
      message,
    };
  }
};

export const renewAccessJWT = async () => {
  const { accessJWT } = await apiProcesser({
    method: "get",
    url: userEP,
    isPrivate: true,
    isRefreshJwt: true,
  });

  sessionStorage.setItem("accessJWT", accessJWT);

  return accessJWT;
};
