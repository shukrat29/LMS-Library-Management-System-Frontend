import { apiProcesser } from "../../helpers/axiosHelper";

const burrowEP = import.meta.env.VITE_APP_ROOT_SERVER + "/api/v1/burrows";

export const postNewBurrow = async (obj) => {
  const axiosObj = {
    method: "post",
    url: burrowEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const fetchBurrows = async () => {
  const axiosObj = {
    method: "get",
    url: burrowEP,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
export const fetchSingleBurrow = async (_id) => {
  const axiosObj = {
    method: "get",
    url: burrowEP + "/" + _id,
  };
  return apiProcesser(axiosObj);
};

export const returnBook = async (obj) => {
  const axiosObj = {
    method: "put",
    url: burrowEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
