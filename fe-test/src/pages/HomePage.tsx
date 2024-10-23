import React from "react";
import "./BookStoreCard.css";

interface Book {
  name: string;
  author: string;
}

interface BookStoreProps {
  name: string;
  image: string;
  books: Book[];
  rating: number;
  establishmentDate: string;
  website: string;
  countryCode: string;
  flagUrl: string;
}

const BookStoreCard: React.FC<BookStoreProps> = ({
  name,
  image,
  books,
  rating,
  establishmentDate,
  website,
  countryCode,
  flagUrl,
}) => {
  return (
    <div className="bookstore-card">
      <div className="bookstore-image-wrapper">
        <img src={image} alt={name} className="bookstore-image" />
      </div>
      <div className="bookstore-details">
        <h2 className="bookstore-name">{name}</h2>
        <div className="books-wrapper">
          <h3 className="books-title">Best-selling books</h3>
          {books.length > 0 ? (
            <div className="books-list">
              {books.slice(0, 2).map((book, index) => (
                <div key={index} className="book-item">
                  <span className="book-name">{book.name}</span> -{" "}
                  <span className="book-author">{book.author}</span>
                </div>
              ))}
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
        <div className="bookstore-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
              &#9733;
            </span>
          ))}
        </div>
        <div className="bookstore-meta">
          <p className="establishment-date">
            {establishmentDate} - <a href={website}>{website}</a>
          </p>
          <img src={flagUrl} alt={countryCode} className="country-flag" />
        </div>
      </div>
    </div>
  );
};

export default BookStoreCard;
