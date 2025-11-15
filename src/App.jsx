import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>

    </div>
  );
}

export default App;
