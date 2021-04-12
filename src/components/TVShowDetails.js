import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';



const TVShowDetails = ({name, poster_path, overview, vote_average, number_of_seasons}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="detail-list">
                <img src={IMG_API + poster_path} alt={name}></img>
                <div className="detail-info">
                    <h3>{name}</h3>
                    <h3>Average Rating: {vote_average}/10</h3>
                    <h3>{number_of_seasons} Seasons</h3>
                    <p>{overview}</p>
                    
                </div>
            </div>
        </>
    );
};

export default TVShowDetails;