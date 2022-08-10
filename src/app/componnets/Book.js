import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllbookAsync, selectBooks } from "../Slicers/bookSlice";
import { loanBookAsync } from "../Slicers/orderSlice";
import { selectToken } from "../Slicers/loginSlice";

export function Book() {
  const books = useSelector(selectBooks);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllbookAsync());
  }, []);
  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.map((book, i) => (
          <div key={i}>
            {book.bookName} {book.author}
            <button
              onClick={() => dispatch(loanBookAsync({ id: book.id, token }))}
            >
              Loan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
