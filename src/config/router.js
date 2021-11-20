import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../routes/home";
import About from "../routes/about";
function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
