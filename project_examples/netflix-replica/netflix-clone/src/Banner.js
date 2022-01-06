import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './request'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length)]
            )
            
        }
        fetchData();
    }, []);
    console.log('Im banner')
    console.log(movie)

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org./t/p/original/${movie?.backdrop_path}"
                )`
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                    <h1 className="banner__description">
                        {movie?.overview}
                    </h1>
                </div>
            </div>
            <div className="banner__fadeButton">

            </div>
        </header>
    )
}

export default Banner
