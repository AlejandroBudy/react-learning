import {useParams} from "react-router-dom";

const ProductDetails = () => {
    const params = useParams()
    const productId = params.productId
    return <h1>Product {productId} details!</h1>
}

export default ProductDetails