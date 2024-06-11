import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import SignIn from "./pages/sigin-signup/SignIn";
import SignUp from "./pages/sigin-signup/SignUp";
import Product from "./pages/book/BookLanding";
import Dashobard from "./pages/dashboard/Dashobard";
import { AuthRoute } from "./components/auth/AuthRoute";
import BookList from "./pages/book/BookList";
import EditBook from "./pages/book/EditBook";
import AddNewBook from "./pages/book/AddNewBook";
import StudentsList from "./pages/user/StudentsList";
import AllBurrowList from "./pages/burrow/AllBurrowList";
import MyBurrow from "./pages/burrow/MyBurrow";
import UserProfile from "./pages/user/UserProfile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBooksAction } from "./features/books/bookAction";
import BookLanding from "./pages/book/BookLanding";
import { autoLogin } from "./features/users/userAction";
import Reviews from "./pages/reviews/Reviews";
import { getReviews } from "./features/reviews/reviewAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksAction());
    dispatch(autoLogin());
    dispatch(getReviews());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="book/:_id" element={<BookLanding />} />

        {/* private routes */}
        {/* admin access only  */}
        <Route path="admin/books" element={<BookList />} />
        <Route path="admin/books/new" element={<AddNewBook />} />
        <Route path="admin/book/edit/:_id" element={<EditBook />} />
        <Route path="admin/students" element={<StudentsList />} />
        <Route path="admin/all-burrows" element={<AllBurrowList />} />

        <Route path="admin/reviews" element={<Reviews />} />

        {/* both admin and students  */}
        <Route path="dashboard" element={<Dashobard />} />
        <Route path="my-books" element={<MyBurrow />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
