import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/pages/Home.module.scss';
import Link from 'next/link';


const MovieDetail = ({id, title, poster_path, overview, vote_average, runtime, release_date}) => {
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