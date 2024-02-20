import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Error from "./components/error/error";
import Movie from "./components/movie/movie";
import TvSeries from "./components/tv-series/tvSeries";
import Bookmark from "./components/bookmark/bookmark";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Login />,
        errorElement:<Error/>
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/movies",
        element: <Movie />,
        errorElement: <Error />,
    },
    {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement: <Error />,
    },
    {
        path: "/bookmarks",
        element: <Bookmark />,
        errorElement: <Error />,
    },
]);