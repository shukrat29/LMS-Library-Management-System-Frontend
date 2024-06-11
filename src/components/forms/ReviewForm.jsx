import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../customInpute/CustomInput";
import { FaStar } from "react-icons/fa";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { addNewReviewAction } from "../../features/reviews/reviewAction";

export const ReviewForm = ({ burrow, setBurrow }) => {
  const dispatch = useDispatch();
  const { form, handleOnChange } = useForm({});
  const [ratings, setRatings] = useState(1);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { _id, userId, bookId, userName, bookTitle, thumbnail } = burrow;
    const obj = {
      ...form,
      ratings,
      burrowId: _id,
      userId,
      bookId,
      userName,
      bookTitle,
      thumbnail,
    };

    if (window.confirm("Are you sure, you want to leave this review?")) {
      const action = await dispatch(addNewReviewAction(obj));
      action && setBurrow({});
    }
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Title"
          name="tilte"
          type="text"
          required
          placeholder="Awesome book"
          onChange={handleOnChange}
        />

        <div className="mb-3">
          <label htmlFor="">Select Star: </label>
          {new Array(5).fill("").map((item, i) => (
            <FaStar
              key={i}
              onClick={() => setRatings(i + 1)}
              className={i < ratings ? "text-warning" : ""}
            />
          ))}
        </div>
        <CustomInput
          label="Message"
          name="message"
          type="text"
          as="textarea"
          required
          rows="5"
          placeholder="Write detail review"
          onChange={handleOnChange}
        />

        <div className="d-grid py-2">
          <Button type="submit">Submit Review</Button>
        </div>
      </Form>
    </div>
  );
};
