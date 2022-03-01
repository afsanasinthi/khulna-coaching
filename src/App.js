
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AboutExternal from './Pages/About/AboutExternal';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutExternal />} />
        </Routes>
        <Routes>
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
