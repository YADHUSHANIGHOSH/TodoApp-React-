import React from "react";
import { Route, Routes ,Link } from "react-router-dom";
import Home from "./components/ReactRouter/pages/Home";
import About from "./components/ReactRouter/pages/About";
import NotFound from "./components/ReactRouter/pages/NotFound";

function App() {
  return (
    <div>
    <div className="headerSection">
    <ul>
        <li><Link  to='/'><Link/>HOME </Link></li>
        <li><Link to='about'>ABOUT</Link></li>
    </ul>
    </div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="about" element={<About/>}/>
      <Route path ="*" element={<NotFound/>}/>
    </Routes>
  
 
 </div>
  );
}

export default App;
