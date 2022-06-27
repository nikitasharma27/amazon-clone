import React from 'react';
import './Product.css';

const Product = ({id, title, price, image, rating, key}) => {
  return (
    <div className="product">
        <div className="product__box">
            <span>{title}</span>
            <div className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </div>

            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map(() => { return(
                        <img className="product__star" key={id} src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=1060&t=st=1656231640~exp=1656232240~hmac=df03ce1b370f49ce94a152873e449d1b486cf24fc071fbd33bf17a969af2da44" alt="star"></img>
                    )})
                }
            </div>
        </div>
        <img className="product__image" src={image} alt="Product"></img>
        <button className="product__cta">Add to Cart</button>
    </div>
  )
}

export default Product