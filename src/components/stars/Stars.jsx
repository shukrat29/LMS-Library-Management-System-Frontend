import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const maxRating = 5;
export const Stars = ({ stars = 0, totalReviews }) => {
  const halfStar = !Number.isInteger(stars);

  const fullRating = Math.floor(stars);

  const emptyRating = maxRating - fullRating - (halfStar ? 1 : 0);

  if (stars > maxRating) {
    return "Invalid ratings";
  }

  const showStars = [];
  for (let i = 0; i < fullRating; i++) {
    showStars.push(<FaStar className="text-warning  " />);
  }
  halfStar &&
    showStars.push(<FaStarHalfAlt className="text-warning text-secondary  " />);

  if (emptyRating) {
    for (let i = 0; i < emptyRating; i++) {
      showStars.push(<FaRegStar />);
    }
  }

  return (
    <div className="fs-3">
      {showStars}
      {totalReviews && (
        <span>
          ({stars.toFixed(1)}/{totalReviews})
        </span>
      )}
    </div>
  );
};
