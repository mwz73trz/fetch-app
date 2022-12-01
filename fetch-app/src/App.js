import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FetchAPI from "./pages/FetchAPI";
import AsyncAwait from "./pages/AsyncAwait";
import AxiosLibrary from "./pages/AxiosLibrary";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch-api" element={<FetchAPI />} />
        <Route path="/async-await" element={<AsyncAwait />} />
        <Route path="/axios" element={<AxiosLibrary />} />
      </Routes>
    </div>
  );
};

export default App;
