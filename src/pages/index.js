import { useState, useEffect } from 'react';
import Head from 'next/head';
import React from 'react';

import MovieList from "components/MovieList";
import MovieDetail from "components/MovieDetail";

import styles from 'styles/pages/Home.module.scss';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';


SwiperCore.use([Navigation, Pagination]);



const UPCOMING_MOVIES_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=e0ae2441f2fc238a8149d29a2fd0b99e&language=en-US&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w500";
const SEARCH_API = "https://api.themoviedb.org/3/movie/343611?api_key={e0ae2441f2fc238a8149d29a2fd0b99e}"


function Home() {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    // getUMovieRequest();
    fetch(UPCOMING_MOVIES_API).then((res) => res.json()).then((data) => {
      console.log(data);
      setMovies(data.results);
    })
  }, []);

  return (
    <>
    <header className="search-bar">
        <input className="search" type="search" placeholder="Search"></input>
    </header>
    
    {movies.length > 0 ?
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper = {(swiper) => console.log(swiper)}
      >
        {movies.length > 0 && movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieList key={movie.id} {...movie} />
        </SwiperSlide>))}
      </Swiper>
      :
        <h2>No movies.</h2>
    }
    
    </>
  );

};


export default Home;
