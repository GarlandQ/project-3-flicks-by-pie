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
                    <h1>{title}</h1>
                    <h3>
                        <img className="detail-logo" src={"/static/images/starratings.svg"} alt="Ratings"></img>
                        {vote_average}/10</h3>
                    <h3>
                        <img className="detail-logo" src={"/static/images/runtimeclock.svg"} alt="RunTime"></img>
                        {runtime} Minutes</h3>
                    <h3>
                        <img className="detail-logo" src={"/static/images/releasecalender.svg"} alt="ReleaseDate"></img>
                        {release_date}</h3>
                    <p>{overview}</p>
                </div>
            </div>
        </>
    );
};

export default MovieDetail;