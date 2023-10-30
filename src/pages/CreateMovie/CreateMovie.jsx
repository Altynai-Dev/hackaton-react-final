import './CreateMovie.scss';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMovie, getGenres } from '../../store/videos/videosActions';

const CreateMovie = () => {

  const {genres} = useSelector((state)=>state.videos);
  
  const [movie, setMovie] = useState({
    name: "",
    age_rating: 0,
    description: "",
    poster:"",
    genre: []
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    dispatch(createMovie(movie));
    navigate("/");
  }

  return (
    <div className='createCard'>
      <div className="container">
        <div className="form">
      <h3>Create Movie</h3>
      <input
        type="text"
        placeholder="Название"
        onChange={(e) => setMovie({ ...movie, name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Возрастное ограничение"
        onChange={(e) =>
          setMovie({ ...movie, age_rating: parseInt(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Описание"
        onChange={(e) =>
          setMovie({ ...movie, description: e.target.value })
        }
      />
      <input
        type="file"
        placeholder="Poster"
        onChange={(e) =>
          setMovie({ ...movie, poster: e.target.files[0] })
        }
      />
        <select onChange={(e) => setMovie({ ...movie, genre: e.target.value })} className="w-full mb-4 p-3 h-12 border rounded-md">
          <option disabled>Выберите жанр</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      <button onClick={handleSubmit}>
        Create
      </button>
      </div>
      </div>
    </div>
  );
};

export default CreateMovie;