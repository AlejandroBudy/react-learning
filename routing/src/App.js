import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: '',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/products', element: <ProductsPage/>},
            {path: '/products/:productId', element: <ProductDetails/>}
        ]
    }
])

const App = () => {

    return <RouterProvider router={router}/>

}

export default App;