import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
// -
import About from "./components/common/About";
import ProductPage from './components/common/ProductPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile.js';
import Seller from './pages/Seller.js';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/products/:category" element={<ProductPage />}></Route>
          <Route exact path="/auth/login" element={<Login />}></Route>
          <Route exact path="/auth/signup" element={<SignUp />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/addproduct" element={<Seller />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
