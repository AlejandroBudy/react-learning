import { useState } from "react"
import searchItems from "./api"
import ImageList from "./components/ImageList"
import SearchBar from './components/SearchBar'

function App() {

    const [images, setImages] = useState([])
    const handleSbmit = async (term) => {
        const result = await searchItems(term)
        setImages(result)
    }
    return <div>
        <SearchBar onSubmit={handleSbmit} />
        <ImageList images={images}/>
    </div>
}

export default App