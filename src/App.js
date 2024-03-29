import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:search" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
