import './App.css';
import React from 'react';
import Header from "./MyComponents/Header";
import Options from "./MyComponents/Options";
import Footer from "./MyComponents/Footer";
import Budget from "./MyComponents/Budget";
import Insurance from "./MyComponents/Insurance";
import Investment from "./MyComponents/Investment";
import Retirement from "./MyComponents/Retirement";
import Saving from "./MyComponents/Saving";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App" style={{fontFamily:"manrope"}}>
    <Header/>
      <Routes>
      <Route path="/" exact element={<Options/>}></Route>
      <Route path="/budget" exact element={<Budget/>}></Route>
      <Route path="/insurance" exact element={<Insurance/>}></Route>
      <Route path="/investment" exact element={<Investment/>}></Route>
      <Route path="/retirement" exact element={<Retirement/>}></Route>
      <Route path="/saving" exact element={<Saving/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
