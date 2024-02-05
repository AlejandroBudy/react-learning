import React, {useContext, useEffect} from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import {BooksContext, ContextValue} from "./context/Books";

export interface Book {
    id: string
    title: string
}

const App: React.FC = () => {

    const {fetchBooks} = useContext(BooksContext) as ContextValue

    useEffect(() => {
        void fetchBooks()
    }, []);

    return <div className="app">
        <h1>Reading list</h1>
        <BookList/>
        <BookCreate/>

    </div>
}

export default App