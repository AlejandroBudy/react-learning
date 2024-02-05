import React, {FormEvent, useState} from "react"
import {Book} from "../App"
import useBookContext from "../hooks/useBookContext";

interface BookEditProps {
    book: Book
}

const BookEdit: React.FC<BookEditProps> = ({book}) => {
    const [title, setTitle] = useState(book.title)
    const {editBook} = useBookContext()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        editBook(book.id, title)
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button className="button is-primary">save</button>
    </form>
}

export default BookEdit