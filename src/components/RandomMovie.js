import React from 'react';
import Link from 'next/link';



const RandomMovie = ({id, title, backdrop_path, overview}) => {
    const IMG_API = "https://image.tmdb.org/t/p/original";

    return (
        <>
            <div className="show-hero">
                <Link href={"/movie/" + id} key={id}>
                    <img className="hero-poster" src={IMG_API + backdrop_path} alt={title}></img>
                </Link>
                <div className="hero-title">
                    <h1>{title}</h1>
                    <p>{overview}</p>
                </div>
            </div>
        </>
    );
};


export default RandomMovie;