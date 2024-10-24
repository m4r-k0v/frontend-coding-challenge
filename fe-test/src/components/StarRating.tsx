type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="bookstore-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
