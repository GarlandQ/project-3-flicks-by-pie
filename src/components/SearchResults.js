import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import Link from 'next/link';
import Router from 'next/router';


SwiperCore.use([Navigation]);


const SearchResults = ({id, title, poster_path}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="show-list">
                <Link href={"/movie/" + id} key={id}>
                    <img src={IMG_API + poster_path} alt={title}></img>
                </Link>
                <div className="show-title">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    );
};


export default SearchResults;