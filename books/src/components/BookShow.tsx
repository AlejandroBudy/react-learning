import React, {useState} from "react"
import {Book} from "../App"
import BookEdit from "./BookEdit"
import useBookContext from "../hooks/useBookContext";

interface BookShowProps {
    book: Book
}

const BookShow: React.FC<BookShowProps> = ({book}) => {

    const [edit, setEdit] = useState<boolean>(false)
    const {deleteBook} = useBookContext()

    return <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
        <div>
            {edit ? <BookEdit book={book}/> : <h3>{book.title}</h3>}
        </div>
        <div className="actions">
            <button className="edit" onClick={() => setEdit(!edit)}>
                Edit
            </button>
            <button className="delete" onClick={() => deleteBook(book.id)}>
                Delete
            </button>
        </div>
    </div>
}

export default BookShow