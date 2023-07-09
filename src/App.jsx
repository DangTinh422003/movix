import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "./layouts";
import ScrolltoTop from "./hooks/ScrolltoTop";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      return promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item.name));
    });
    dispatch(getGenres(allGenres));
  };

  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, component, layout }) => {
          const Page = component;
          const Layout = layout || DefaultLayout;
          return (
            <Route
              path={path}
              element={
                <Layout>
                  <ScrolltoTop>
                    <Page />
                  </ScrolltoTop>
                </Layout>
              }
              key={uuidv4()}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
