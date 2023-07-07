import Home from "../pages/home/Home";
import Detail from "../pages/details/Detail";
import SearchResult from "../pages/searchResult/SearchResult";
import Explore from "../pages/explore/Explore";
import PageNotFound from "../pages/404/pageNotFound";
import { DefaultLayout } from "~/layouts";

// ** public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/:mediaType/:id", component: Detail },
  { path: "/search/:query", component: SearchResult },
  { path: "/explore/:mediaType", component: Explore },
  { path: "*", component: PageNotFound },
];

// ** private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
