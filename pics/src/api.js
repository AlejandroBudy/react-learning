import axios from "axios";

const searchItems = async (items) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID TxRjVIwQHufGSW395_yHu4dpv96GSVTVrtbie2LjGp4'
        }, params: {
            query: items
        }
    })

    return response.data.results
}

export default searchItems
