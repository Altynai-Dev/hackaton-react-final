import s from './CreateVideo.module.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createVideo } from '../../store/videos/videosActions';

const CreateVideo = () => {
  
  const [video, setVideo] = useState({
    number: 0,
    name: "",
    season: "",
    title: "",
    video: ""
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createVideo(video));
    navigate('/movies');
  }

  return (
    <div className={s.createCard}>
      <div className={s.createForm}>
      <h3>Добавить серию</h3>
      <input
        type="number"
        placeholder="Номер серии"
        onChange={(e) => setVideo({ ...video, number: parseInt(e.target.value) })}
      />

      <input
        type="text"
        placeholder="Название"
        onChange={(e) =>
          setVideo({ ...video, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Сезон"
        onChange={(e) =>
          setVideo({ ...video, season: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Title"
        onChange={(e) =>
          setVideo({ ...video, title: e.target.value })
        }
      />
      <input
        type="file"
        placeholder="Video"
        accept=""
        onChange={(e) =>
          setVideo({ ...video, video: e.target.files[0] })
        }
      />

        {/* <select onChange={(e) => setGame({ ...game, type: e.target.value })}>
          <option disabled>Choose category</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select> */}
      <button className={s.createBtn} onClick={handleSubmit}
        // onClick={() => {
        //   dispatch(createGame({ game }));
        //   navigate("/games");
        // }}
      >
        Create
      </button>
      </div>
    </div>
  );
};

export default CreateVideo;