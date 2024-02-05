import React, {FormEvent, useState} from "react"
import useBookContext from "../hooks/useBookContext";


const BookCreate: React.FC = () => {

    const [title, setTitle] = useState<string>('')
    const {createBook} = useBookContext()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        createBook(title)
        setTitle('')
    }

    return <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button className="button">Create!</button>
        </form>
    </div>
}

export default BookCreate