import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { setUser } from "../../features/users/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  const handleOnLogOut = () => {
    //sign out from browser
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));

    // sign out from server
  };
  return (
    <Navbar expand="md" variant="dark" className="bg-dark">
      <Container>
        <Link to="/" className="navbar-brand">
          BL
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <i className="fa-solid fa-house"></i> Dashboard
                </Link>
                <Link onClick={handleOnLogOut} className="nav-link" to="/">
                  <i className="fa-solid fa-house"></i> Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signin">
                  {" "}
                  <i className="fa-solid fa-right-to-bracket"></i> SignIn
                </Link>
                <Link className="nav-link" to="/signup">
                  <i className="fa-solid fa-user"></i> SignUp
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
