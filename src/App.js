import './App.css';
import { Header } from './components/Header';
import About from './components/About';
import Download from './components/Download';
import HowToPlay from './components/HowToPlay';
import Lore from './components/Lore';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
  <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="download" element={<Download />} />
        <Route path="how-to-play" element={<HowToPlay />} />
        <Route path="lore" element={<Lore />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
