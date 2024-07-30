import "./index.css";

import Card from "./Card";
import products from "./data";
import Counter from "./Counter";
import Switch from "./Switch";
import Gallery from "./Gallery";
import Form from "./Form";
import Button from "./Button";
import Todolist from "./Todolist";
import { Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";

function App() {
  return <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/*" element={<Notfound/>} />
        </Routes>
  </div>;
}

export default App;
