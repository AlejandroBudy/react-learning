import {useContext} from "react";
import {BooksContext, ContextValue} from "../context/Books";

const useBookContext: () => ContextValue = () => {
    return useContext(BooksContext) as ContextValue
}

export default useBookContext