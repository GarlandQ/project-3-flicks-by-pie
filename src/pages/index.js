import { useState, useEffect } from 'react';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

import MovieList from "components/MovieList";
import TVShowList from "components/TVShowList";
import SearchResults from "components/SearchResults";

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';


SwiperCore.use([Navigation, Pagination]);



const UPCOMING_MOVIES_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=e0ae2441f2fc238a8149d29a2fd0b99e";
const TRENDING_MOVIES_API = "https://api.themoviedb.org/3/trending/movie/week?api_key=e0ae2441f2fc238a8149d29a2fd0b99e"
const TRENDING_TVSHOWS_API = "https://api.themoviedb.org/3/trending/tv/week?api_key=e0ae2441f2fc238a8149d29a2fd0b99e"
const SEARCH_API = "https://api.themoviedb.org/3/search/multi?api_key=e0ae2441f2fc238a8149d29a2fd0b99e&query="


function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  

  useEffect(() => {
    async function getUpcomingMovies() {
      try {
        const response = await fetch(UPCOMING_MOVIES_API);
        const json = await response.json();
        // console.log(json.results);
        setUpcomingMovies(json.results);
      }
      catch (e) {
        console.error(e);
      }
    };
    getUpcomingMovies();
  }, []);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const response = await fetch(TRENDING_MOVIES_API);
        const json = await response.json();
        // console.log(json.results);
        setTrendingMovies(json.results);
      }
      catch (e) {
        console.error(e);
      }
    };
    getTrendingMovies();
  }, []);

  useEffect(() => {
    async function getTrendingTVShows() {
      try {
        const response = await fetch(TRENDING_TVSHOWS_API);
        const json = await response.json();
        // console.log(json.results);
        setTrendingTVShows(json.results);
      }
      catch (e) {
        console.error(e);
      }
    };
    getTrendingTVShows();
  }, []);


  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  //   fetch(SEARCH_API + searchTerm).then((res) => res.json()).then((data) => {
  //     console.log(data);
  //     setSearchTerm(data.results);
  //   });
  //   setSearchTerm('');
    
    
  // };

  // const handleOnChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  
  const searchShows = async (e) => {
    e.preventDefault();
    console.log("Searching...");
    try {
      const response = await fetch(SEARCH_API + searchTerm);
      const json = await response.json();
      console.log(json.results);
      setSearchResult(json.results);
    }
    catch (e) {
      console.error(e);
    }
  }


  return (
    <>
      <Head>
        <title>Flicks by PIE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="header-bar">
        <Link href={"/"}>
          <img className="logo" src = {"/static/images/pielogo.svg"} alt="Home"></img>
        </Link>
        <form onSubmit={searchShows}>
          <input 
            className="search" 
            type="search" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
      </header>

      
      
      <div className="show-container">
        <h2>Upcoming Movies</h2>
        {upcomingMovies.length > 0 ?
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            {upcomingMovies.length > 0 && upcomingMovies.map((upcomingMovie) => (
            <SwiperSlide key={upcomingMovie.id}>
              <MovieList key={upcomingMovie.id} {...upcomingMovie} />
            </SwiperSlide>))}
          </Swiper>
          :
            <h2></h2>
        }
      </div>

      <div className="show-container">
        <h2>Trending Movies</h2>
        {trendingMovies.length > 0 ?
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            {trendingMovies.length > 0 && trendingMovies.map((trendingMovie) => (
            <SwiperSlide key={trendingMovie.id}>
              <MovieList key={trendingMovie.id} {...trendingMovie} />
            </SwiperSlide>))}
          </Swiper>
          :
            <h2></h2>
        }
      </div>

      <div className="show-container">
        <h2>Trending TV Shows</h2>
        {trendingTVShows.length > 0 ?
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            {trendingTVShows.length > 0 && trendingTVShows.map((trendingTVShows) => (
            <SwiperSlide key={trendingTVShows.id}>
              <TVShowList key={trendingTVShows.id} {...trendingTVShows} />
            </SwiperSlide>))}
          </Swiper>
          :
            <h2></h2>
        }
      </div>

      <footer className="footer-bar">
        <h4>© 2021 PIE LLC</h4>
        <p>Movie Data Provided By <img className="logo" src = {"/static/images/tmdblogo.svg"} alt="TMDB"></img>
        </p>
      </footer>
    </>
  );

};


export default Home;
