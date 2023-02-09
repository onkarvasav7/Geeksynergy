
import "./App.css";
import Signup from "./components1/Signup";
import Login from "./components1/Login";
import MovieList from "./components1/MovieList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyInfo from "./components1/CompanyInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
          <Route exact path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/movielist" element={<MovieList />}></Route>
          <Route path="/companyinfo" element={<CompanyInfo />}></Route>
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
