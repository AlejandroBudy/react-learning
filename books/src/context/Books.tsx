import React, {createContext, useState} from "react";
import {Book} from "../App";
import axios from "axios";

export interface ContextValue {
    books: Book[]
    fetchBooks: () => void
    createBook: (title: string) => void
    deleteBook: (id: string) => void
    editBook: (id: string, title: string) => void
}

export const BooksContext = createContext<ContextValue | null>(null)


const Provider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [books, setBooks] = useState<Book[]>([])

    const fetchBooks = async () => {
        const response = await axios.get<Book[]>("http://localhost:3001/books")
        setBooks(response.data)
    }

    const deleteBook: (id: string) => void = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        setBooks(books.filter((book) => book.id !== id))
    }

    const createBook = async (title: string) => {
        const response = await axios.post<Book>("http://localhost:3001/books", {
            title: title
        })
        setBooks([...books, response.data])
    }

    const editBook: (id: string, name: string) => void = async (id, name) => {
        const response = await axios.put<Book>(`http://localhost:3001/books/${id}`, {
            title: name
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data}
            }
            return book
        })

        setBooks(updatedBooks)
    }

    return <BooksContext.Provider value={{books, fetchBooks, createBook, deleteBook, editBook}}>
        {children}
    </BooksContext.Provider>

}

export default Provider