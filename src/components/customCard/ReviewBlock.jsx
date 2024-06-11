import React from "react";
import { Stars } from "../stars/Stars";

export const ReviewBlock = ({ pubReviews }) => {
  console.log(pubReviews);
  return (
    <div>
      {pubReviews.map(
        ({ _id, userName, ratings, tilte, message, createdAt }) => (
          <div key={_id} className="mb-4 shadow-lg p-2">
            <div className="d-flex gap-2 align-items-baseline mb-2">
              <div
                className="bg-primary rounded-pill d-flex justify-content-center align-items-center   fw-bolder text-white "
                style={{ width: "40px", height: "40px" }}
              >
                {userName[0]}
              </div>
              <h4 className="">{userName}</h4>
            </div>
            <div className=" gap-2">
              <Stars stars={ratings} />

              <h4 className="mt-3">{tilte}</h4>
            </div>
            <small> Data : {createdAt?.slice(0, 10)}</small>
            <div className="mt-2">{message}</div>
          </div>
        )
      )}
    </div>
  );
};
