// Import router untuk mengatur rute (mengarahkan pengguna ke halaman lain)
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Import shared components
import Navbar from './components/Shared/Navbar';
// Import components
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Product/Products';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element ={<About />}></Route>
        <Route path='/Products' element ={<Products />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
