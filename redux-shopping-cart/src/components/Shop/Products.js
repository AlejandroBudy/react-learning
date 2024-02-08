import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_products = [
    {
        id: 'p1',
        price: 6,
        title: 'My first book',
        description: 'first book'
    },
    {
        id: 'p2',
        price: 5,
        title: 'My second book',
        description: 'second book'
    }
]
const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {dummy_products.map((product) => {
                    return <ProductItem
                        title={product.title}
                        price={product.price}
                        id={product.id}
                        description={product.description}
                        key={product.id}
                    />
                })}
            </ul>
        </section>
    );
};

export default Products

