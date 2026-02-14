// import atleticSocks6 from '../../assets/images/products/athletic-cotton-socks-6-pairs.jpg';
// import rating45 from '../../assets/images/ratings/rating-45.png';
// import rating40 from '../../assets/images/ratings/rating-40.png';
// import interBasketball from '../../assets/images/products/intermediate-composite-basketball.jpg';
// import cottonplaitshirt from '../../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg';
import Header from '../../components/Header';
import './HomePage.css';
import { products } from '../../products.js';

import Product from '../../components/Product.jsx';

export default function HomePage() {
    return (
        <>
            <link rel='icon' type='image/svg+xml' href='/home-favicon.png' />
            <title>Ecommerce Project</title>
            <Header />
            <div className='home-page'>
                <div className='products-grid'>
                    {products.map((product) => (
                        <Product key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}
