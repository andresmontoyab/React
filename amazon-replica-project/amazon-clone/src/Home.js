import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className = "home__image" 
                    src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt = ""
                />

                <div className="home__row">
                    <Product 
                        title ='The Lean Startup'
                        price ={29.99}
                        rating={5}
                        image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                    <Product 
                        title ='Lg Monitor'
                        price ={599.99}
                        rating={4}
                        image= "https://m.media-amazon.com/images/I/61IHOHn+tgL._AC_SL1500_.jpg"/>
                </div>

                <div className="home__row">
                    <Product 
                        title ='Demon Souls '
                        price ={80.00}
                        rating={4}
                        image= "https://images-na.ssl-images-amazon.com/images/I/81QoNRp5%2BWL._SL1353_.jpg"/>
                    <Product 
                        title ='God of War'
                        price ={89.99}
                        rating={4}
                        image= "https://media.vandal.net/m/90451/god-of-war-ragnarok-20201124143582_1.jpg"/>
                    <Product 
                        title ='Horizon Zero Dawn'
                        price ={60.99}
                        rating={4}
                        image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7egGXWJaCxa-HKT5IAs53Wyv-yVV-8Lg4Rg&usqp=CAU"/>
                
                </div>

                <div className="home__row">
                    <Product 
                        title ='Ps5 '
                        price ={499.99}
                        rating={4}
                        image= "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home
