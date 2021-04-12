import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import Link from 'next/link';

SwiperCore.use([Navigation]);


const TVShowList = ({id, name, poster_path}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="show-list">
                <Link href={"/tvshow/" + id} key={id}>
                    <img src={IMG_API + poster_path} alt={name}></img>
                </Link>
                
                <div className="show-title">
                    <h3>{name}</h3>
                </div>
            </div>
        </>
    );
};


export default TVShowList;