import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';
import Products from './Components/pages/Products';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/services" element={<Services />}/>
          <Route exact path="/sign-up" element={<SignUp />}/>
          <Route exact path="/products" element={<Products />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
