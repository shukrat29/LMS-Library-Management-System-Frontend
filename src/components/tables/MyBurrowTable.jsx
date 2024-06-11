import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllBooksAction } from "../../features/books/bookAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { returnBurrowAction } from "../../features/burrows/burrowAction";
import { ReviewForm } from "../forms/ReviewForm";
import { CustomModal } from "../customModal/CustomModal";

export const MyBurrowTable = ({ burrows = [] }) => {
  const dispatch = useDispatch();
  const [burrow, setBurrow] = useState({});

  useEffect(() => {}, [dispatch]);
  return (
    <div>
      {burrow?._id && (
        <CustomModal title="Leave your review" onHide={setBurrow}>
          <ReviewForm burrow={burrow} setBurrow={setBurrow} />
        </CustomModal>
      )}

      <div className="d-flex justify-content-between mb-4">
        <div>30 Burrowed history found!</div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Returned Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width={"70px"} />
              </td>
              <td>
                <h2>{item.bookTitle.slice(0, 30)} ...</h2>
              </td>
              <td>{item?.dueDate?.slice(0, 10)}</td>
              <td>{item?.returnedDate?.slice(0, 10) || "-"}</td>

              <td>
                {item?.isReturned ? (
                  <Button onClick={() => setBurrow(item)} variant="warning">
                    Give Reviews
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={() =>
                      window.confirm(
                        "Are you sure you want to reaturn this book?"
                      ) &&
                      dispatch(
                        returnBurrowAction({
                          _id: item._id,
                          bookId: item.bookId,
                        })
                      )
                    }
                  >
                    Return Book
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
