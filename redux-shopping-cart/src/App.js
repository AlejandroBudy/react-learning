import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux";
import {useEffect} from "react";


function App() {
    const cartShow = useSelector(state => state.ui.cartShow)
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        void fetch("http://localhost:3001/carts", {method: 'POST', body: JSON.stringify(cart)})
    }, [cart]);
    return (
        <Layout>
            {cartShow && <Cart/>}
            <Products/>
        </Layout>
    );
}

export default App;
