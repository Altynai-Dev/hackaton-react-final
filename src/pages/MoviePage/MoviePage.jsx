import React from "react";
import Navbar from "../../components/navbar/Navbar";
import s from './MoviePage.module.css';
import VideoSearch from "../../components/videoSearch/VideoSearch";
import MovieList from "../../components/MoviesList/MovieList";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import Slider from "./Slider";

const MoviePage = () => {
  
  return (
    <div className={s.moviePage}>
      <Navbar />
      <div className="slider">
        <Slider/>
      </div>
      <div className={s.movieContent}>
      <MoviesFilter />
      <VideoSearch />
      </div>
      <MovieList />
    </div>
  )
}

export default MoviePage