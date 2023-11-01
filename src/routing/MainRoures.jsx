import React from "react";
import { Route, Routes } from "react-router-dom";
import Netflix from "../pages/Netflix/Netflix";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Player from "../pages/PlayerPage/Player";
import Games from "../components/games/Games";
import Details from "../pages/Details/Details";
import Series from "../pages/Series/Series";
import Seasons from "../pages/Seasons/Seasons";
import CreateVideo from "../pages/Create/CreateVideo";
import AnimeGame from "../components/games/AnimeGame/Animegame";
import CreateMovie from "../pages/CreateMovie/CreateMovie";
import Home from "../pages/home/Home"
const MainRoures = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    {
      id: 2,
      path: "/signup",
      element: <Signup />,
    },
    {
      id: 3,
      path: "/login",
      element: <Login />,
    },
    {
      id: 4,
      path: "/player",
      element: <Player />,
    },
    {
      id: 5,
      path: "/games",
      element: <Games />,
    },
    {
      id: 6,
      path: "/series/:slug",
      element: <Details />,
    },
    {
      id: 7,
      path: "/series/watch/:slug",
      element: <Series />,
    },
    {
      id: 8,
      path: "/series/:slug/series",
      element: <Seasons />,
    },
    {
      id: 9,
      path: "/createVideo",
      element: <CreateVideo />,
    },
    {
      id: 10,
      path: "/createMovie",
      element: <CreateMovie />,
    },
    {
      id: 11,
      path: "/animegame",
      element: <AnimeGame />,
    },
    {
      id: 12,
      path: "/film",
      element: <Netflix/>,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoures;
