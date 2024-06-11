import { useEffect, useRef } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Row, Col, Form, Button } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../features/users/userAxios";
import { getUserObj, userSignInAction } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userInfo);
  console.log(location);

  const sendTo = location?.state?.from?.location?.pathname || "/dashboard";

  useEffect(() => {
    user?._id && navigate(sendTo);
  }, [user?._id, navigate, sendTo]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      return toast.error("Both field must be filled");
    }

    dispatch(userSignInAction({ email, password }));
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Sam@email.com",
      inputRef: emailRef,
      value: "a@a.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
      inputRef: passRef,
      value: "12345",
    },
  ];

  console.log("Is not rendering");
  return (
    <DefaultLayout>
      <Row>
        <Col>
          <Form
            onSubmit={handleOnSubmit}
            className="shadow-lg border p-5 rounded  m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Welcome back!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} />
            ))}

            <div className="d-grid">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignIn;
