import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import Link from 'next/link';

SwiperCore.use([Navigation]);


const MovieList = ({title, poster_path}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    const imageClick = () => {
        console.log("Click");
    }
    return (
        <>
            <div className="movie-list">
                {/* finish linking to movie details */}
                <Link href="">
                    <img src={IMG_API + poster_path} alt={title} onClick={() => imageClick()}></img>
                </Link>
                
                <div className="movie-title">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    );
};


export default MovieList;