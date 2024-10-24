import { useMemo } from "react";
import type { DerivedBook } from "../utility/types";

type BookListProps = {
  books: (DerivedBook | null)[];
};

const BookList = ({ books }: BookListProps) => {
  const selectedBooks = useMemo(() => {
    return books?.slice(0, 2).map((book) => (
      <div key={book?.id} className="book-item">
        <span className="book-name">{book?.name}</span> -{" "}
        <span className="book-author">{book?.author}</span>
      </div>
    ));
  }, [books]);

  return (
    <div className="books-wrapper">
      <h3 className="books-title">Best-selling books</h3>
      {books?.length > 0 ? (
        <div className="books-list">{selectedBooks}</div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default BookList;
