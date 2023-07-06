import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { publicRoutes } from "~/routes";

function App() {
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
