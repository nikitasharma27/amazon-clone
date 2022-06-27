import React from 'react'
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
        <>
            <div className="home">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71h3PeQfC+L._SX3000_.jpg" alt="Amazon Homepage Banner"></img>
            </div>

            <div className="home__row">   
                <Product id="12431234"
                    title="Instant Camera"
                    image="https://m.media-amazon.com/images/I/51BndLfCeAL._AC_SX296_SY426_FMwebp_QL65_.jpg"
                    price={11.96}
                    rating={5}>
                </Product>

                <Product id="12431235"
                    title="My First Library : Boxset of 10 Board Books for Kids"
                    image="https://images-na.ssl-images-amazon.com/images/I/51bR0PX1y9L._AC_SR400,600_.jpg"
                    price={15.40}
                    rating={5}>
                </Product>
                
            </div>

            <div className="home__row">  
                <Product id="12431236"
                    title="Toshiba Canvio Advance 2TB Portable External Hard Drive USB 3.0, Green - HDTCA20XG3AA"
                    image="https://m.media-amazon.com/images/I/810X0n4zYrL._AC_UL640_FMwebp_QL65_.jpg"
                    price={8.11}
                    rating={4}>
                </Product> 

                <Product id="12431239"
                    title="Women's Wrist Watch and Bracelet Set, Premium Crystal Accented"
                    image="https://m.media-amazon.com/images/I/61I6TGLWuTL._AC_UL640_FMwebp_QL65_.jpg"
                    price={60.88}
                    rating={5}>
                </Product>

                <Product id="12431237"
                    title="Ninebot Segway E8 Folding Electric Scooter For Kids 130W Motor"
                    image="https://m.media-amazon.com/images/I/31Yzsn+FfMS._AC_SY400_.jpg"
                    price={50.66}
                    rating={4}>
                </Product>
            </div>

            <div className="home__row">   
                <Product id="12431238"
                    title="Samsung 27-inch IPS Full HD Led Monitor 75Hz,AMD FreeSync,Borderless,VESA -LF27T350FHMXUE"
                    image="https://m.media-amazon.com/images/I/71PGIdDvG9L._AC_UL640_FMwebp_QL65_.jpg"
                    price={200.96}
                    rating={5}>
                </Product>
            </div>
        </>
  )
}

export default Home