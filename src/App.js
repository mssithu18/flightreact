import './App.css';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Package from './Components/Package';
import { Offers } from './Components/Offers';
import { Seatbook } from './Components/Seatbook';
import Malaysia from './Components/Package/Malaysia';
import Kashmir from './Components/Package/Kashmir';
import Thailand from './Components/Package/Thailand';
import Kerala from './Components/Package/Kerala';
import Dubai from './Components/Package/Dubai';
import London from './Components/Package/London';
import Paris from './Components/Package/Paris';
import SouthKorea from './Components/Package/SouthKorea';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/package" element={<Package/>} />
        <Route path="/malaysia" element={<Malaysia/>} />
        <Route path="/kashmir" element={<Kashmir/>} />
        <Route path="/thailand" element={<Thailand/>} />
        <Route path="/kerala" element={<Kerala/>} />
        <Route path="/dubai" element={<Dubai/>} />
        <Route path="/london" element={<London/>} />
        <Route path="/paris" element={<Paris/>} />
        <Route path="/southkorea" element={<SouthKorea/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/seatbook" element={<Seatbook/>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
