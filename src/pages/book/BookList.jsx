import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button } from "react-bootstrap";
import { MdOutlineAddBox } from "react-icons/md";
import { BookTable } from "../../components/tables/BookTable";
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <UserLayout pageTitle={"Book List"}>
      {/* Button here  */}

      <div className="text-end mb-5">
        <Link to="/admin/books/new">
          {" "}
          <Button variant="primary">
            <MdOutlineAddBox /> Add New Book
          </Button>
        </Link>
      </div>
      {/* table here */}
      <BookTable />
    </UserLayout>
  );
};

export default BookList;
