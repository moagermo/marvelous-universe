import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Header from './components/Header';
import Movies from './components/Movies';
import Comic from './components/Comic';
import TVShows from './components/TVShows.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Dashboard}></Route>
        <Route path="/movies" Component={Movies}></Route>
        <Route path="/comic" Component={Comic}></Route>
        <Route path="/tvshows" Component={TVShows}></Route>

      </Routes>
    </Router>
  );
}

export default App;
