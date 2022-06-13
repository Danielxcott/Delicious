import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { Routes, Route, useLocation } from "react-router-dom";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

export default function Pages() {
  const location = useLocation();
  return (
    
    <div>
      <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}> 
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Cuisine/:type" element={<Cuisine/>}></Route>
    <Route path="/Searched/:search" element={<Searched/>}></Route>
    <Route path="/Recipe/:id" element={<Recipe/>}></Route>
    </Routes>
    </AnimatePresence>
    </div>
  )
}
