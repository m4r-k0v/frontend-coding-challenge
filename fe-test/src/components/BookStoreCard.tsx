import BookList from "./BookList";
import StarRating from "./StarRating";
import StoreLogo from "./StoreLogo";
import StoreMetaInfo from "./StoreMetaInfo";
import type { DerivedBook } from "../utility/types";

type BookStoreCardProps = {
  name: string;
  image: string;
  books: (DerivedBook | null)[];
  rating: number;
  establishmentDate: string;
  website: string;
  countryCode: string;
};

const BookStoreCard = ({
  name,
  image,
  books,
  rating,
  establishmentDate,
  website,
  countryCode,
}: BookStoreCardProps) => {
  return (
    <div className="bookstore-card">
      <div className="bookstore-details">
        <div className="flex-just-btwn">
          <StoreLogo image={image} name={name} />
          <h2 className="bookstore-name">{name}</h2>
          <StarRating rating={rating} />
        </div>
        <BookList books={books} />
        <StoreMetaInfo
          establishmentDate={establishmentDate}
          website={website}
          countryCode={countryCode}
        />
      </div>
    </div>
  );
};

export default BookStoreCard;
