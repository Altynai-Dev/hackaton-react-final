import './CreateMovie.scss';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMovie } from '../../store/videos/videosActions';

const CreateMovie = () => {
  
  const [movie, setMovie] = useState({
    name: '',
    age_rating: 0,
    description: "",
    poster:""
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createMovie(movie));
    navigate("/");
  }

  return (
    <div className='createCard'>
      <h3>Create Movie</h3>
      <input
        type="text"
        placeholder="Название"
        onChange={(e) => setMovie({ ...movie, name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Возрвстное ограничение"
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

        {/* <select onChange={(e) => setGame({ ...game, type: e.target.value })}>
          <option disabled>Choose category</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select> */}
      <button onClick={handleSubmit}
        // onClick={() => {
        //   dispatch(createGame({ game }));
        //   navigate("/games");
        // }}
      >
        Create
      </button>
    </div>
  );
};

export default CreateMovie;