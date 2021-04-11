import React from 'react';


const MovieDetail = ({title, poster_path, overview, vote_average, runtime, release_date}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="movie-list">
                <img src={IMG_API + poster_path} alt={title}></img>
                
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span>{vote_average}</span>
                    <span>{runtime}</span>
                    <span>{release_date}</span>
                    <p>overview</p>
                </div>
            </div>
        </>
    );
}