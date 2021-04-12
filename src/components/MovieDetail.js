import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';



const MovieDetail = ({title, poster_path, overview, runtime, vote_average, release_date}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="detail-list">
                <img src={IMG_API + poster_path} alt={title}></img>
                <div className="detail-info">
                    <h3>{title}</h3>
                    <p>{overview}</p>
                    <h3>{runtime} Minutes</h3>
                    <h3>{release_date}</h3>
                    <h3>{vote_average}/10</h3>
                </div>
            </div>
        </>
    );
};

export default MovieDetail;