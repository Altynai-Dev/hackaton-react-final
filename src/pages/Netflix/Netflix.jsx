import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom/dist";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Navbar from "../../components/navbar/Navbar";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos/videosActions";

const Netflix = () => {
  const navigate = useNavigate();

  const {videos} = useSelector((state)=>state.videos);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getVideos());
  },[]);

  console.log(videos)
  return (
    <Container>
      <Navbar />
      <div className="hero">
        <Video />
          {}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
      .buttons {
        position: absolute;
        top: 25rem;
        left: 2rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
export default Netflix;
