import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/nav';
import Home from './component/Home';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Adduser from './component/Adduser';
import Alluser from './component/Alluser';
import Edituser from './component/Edituser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/adduser" Component={Adduser} />
          <Route path="/alluser" Component={Alluser} />
          <Route path="/edituser/:id" Component={Edituser} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
