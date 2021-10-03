import React from 'react';
import useProducts from '../../hooks/UseProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);

    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
    }
    return (
        <div>
            <div>
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product} 
                        handleRemove={handleRemove}></ReviewItem>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;