import './App.css';
import Navbar from "./components/navbar"
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import home from './pages/home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={home} />
        <Route path='/menu' exact Component={Menu} />
        <Route path='/about' exact Component={About} />
        <Route path='/Contact' exact Component={Contact} />
      </Routes>
      <Footer/>

     </Router>

    </div>
  );
}

export default App;
