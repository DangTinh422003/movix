import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { publicRoutes } from "~/routes";

import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      })
      .catch();
  };

  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, component }) => {
          const Page = component;
          return <Route path={path} element={<Page />} key={uuidv4()} />;
        })}
      </Routes>
    </>
  );
}

export default App;
