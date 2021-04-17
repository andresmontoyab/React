import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img src={image} />            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"> {title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon/>
                        ))}
                </div>
                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
