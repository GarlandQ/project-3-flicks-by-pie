import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';



const TVShowDetail = ({name, poster_path, overview, vote_average, number_of_seasons, first_air_date}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="detail-list">
                <img src={IMG_API + poster_path} alt={name}></img>
                <div className="detail-info">
                    <h1>{name}</h1>
                    <h3>
                        <img className="detail-logo" src={"/static/images/starratings.svg"} alt="Ratings"></img>
                        Average Rating: {vote_average}/10</h3>
                    <h3>
                        <img className="detail-logo" src={"/static/images/releasecalender.svg"} alt="ReleaseDate"></img>
                        {first_air_date}</h3>
                    <h3>{number_of_seasons} Seasons</h3>
                    <p>{overview}</p>
                    
                </div>
            </div>
        </>
    );
};

export default TVShowDetail;