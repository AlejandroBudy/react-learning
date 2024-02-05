import React from "react"
import {Book} from "../App"
import BookShow from "./BookShow"
import useBookContext from "../hooks/useBookContext";


const BookList: React.FC = () => {

    const {books} = useBookContext()

    const computeBooks = books.map((book: Book) => {
        return <BookShow key={book.id} book={book}/>
    })

    return <div className="book-list">
        {computeBooks}
    </div>
}

export default BookList