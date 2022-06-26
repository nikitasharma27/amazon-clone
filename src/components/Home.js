import React from 'react'
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
        <>
            <div className="home">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71h3PeQfC+L._SX3000_.jpg" alt="Amazon Homepage Banner"></img>
            </div>

            <div class="home__row">   
                <Product id="12431234"
                    title="Instant Camera"
                    image="https://m.media-amazon.com/images/I/51BndLfCeAL._AC_SX296_SY426_FMwebp_QL65_.jpg"
                    price={11.96}
                    rating={5}>
                </Product>

                <Product id="12431234"
                    title="Instant Camera"
                    image="https://m.media-amazon.com/images/I/51BndLfCeAL._AC_SX296_SY426_FMwebp_QL65_.jpg"
                    price={11.96}
                    rating={5}>
                </Product>
            </div>

            <div class="home__row">   
                <Product id="12431234"
                    title="Instant Camera"
                    image="https://m.media-amazon.com/images/I/51BndLfCeAL._AC_SX296_SY426_FMwebp_QL65_.jpg"
                    price={11.96}
                    rating={5}>
                </Product>

                <Product id="12431234"
                    title="Instant Camera"
                    image="https://m.media-amazon.com/images/I/51BndLfCeAL._AC_SX296_SY426_FMwebp_QL65_.jpg"
                    price={11.96}
                    rating={5}>
                </Product>

                <Product id="12431234"
                    title="Instant Camera"
                    image="https://m.media-amazon.com/images/I/51BndLfCeAL._AC_SX296_SY426_FMwebp_QL65_.jpg"
                    price={11.96}
                    rating={5}>
                </Product>
            </div>

            <div class="home__row">   
                <Product id="12431234"
                    title="Instant Camera"
                    image="https://m.media-amazon.com/images/I/51BndLfCeAL._AC_SX296_SY426_FMwebp_QL65_.jpg"
                    price={11.96}
                    rating={5}>
                </Product>
            </div>
        </>
  )
}

export default Home