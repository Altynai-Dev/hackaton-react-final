import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteSeries, getVideoSeries } from "../../store/videos/videosActions";
import { checkAdmin, checkUserLogin } from "../../helpers/functions";
import s from "./Series.module.css";
import VideoLike from "../../components/videoLike/VideoLike";
import CommentCreate from "../../components/comments/CommentCreate";
import CommentList from "../../components/comments/CommentsList";

const Series = () => {
  const { oneVideo, loading } = useSelector((state) => state.videos);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getVideoSeries({ slug }));
  }, []);

  return (
    <div className={s.seriesContainer}>
      {loading ? (
        <h3>Загрузка...</h3>
      ) : (
        <div className={s.series}>
          {oneVideo && (
            <div>
              <video src={oneVideo.video} controls className={s.videoPlayer} />
              <div className={s.videoInfo}>
                <div>
                  <VideoLike oneVideo={oneVideo} />
                </div>
                <div>Количество лайков: {oneVideo.likes}</div>
              </div>
              {checkUserLogin() && <CommentCreate slug={oneVideo.slug} />}
              <div className={s.commentsBlock}>
                {oneVideo.comments ? (
                  <CommentList comments={oneVideo.comments} />
                ) : (
                  <div>Пока нет комментариев!</div>
                )}
              </div>
              {checkAdmin() && (
                <div className={s.buttonContainer}>
                  <button
                    className={s.seriesBtn}
                    onClick={() => {
                      dispatch(deleteSeries(slug));
                      navigate("/netflix");
                    }}
                  >
                    Удалить
                  </button>
                  <button
                    className={s.seriesBtn}
                    onClick={() => {
                      navigate(`/series/edit-series/${oneVideo.slug}`);
                    }}
                  >
                    Редактировать
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Series;
