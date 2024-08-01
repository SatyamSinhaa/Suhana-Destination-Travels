import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tours from './Pages/Tour/Tours';
import { Description } from './Components/Content/ContentTitles/ContentInfo';
import ScrollgToTop from './Components/ScrollgToTop';
import AboutUs from './Pages/AboutUs/AboutUs';
import TripPackage from './Pages/TripPackage/TripPackage';
import TermConditons from './Pages/Contact/TermConditons';
import Whatsapp from "./Assets/whatsapp (1).png";

const routes = (

  <Router>
    <ScrollgToTop>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="tours" exact element={<Tours />}>
          {Description.map((item, i) => (
            <Route path={item.path} key={i} exact element={item.element} />
          ))}
        </Route>
        <Route path='about' exact element={<About />} />
        <Route path='contact' exact element={<Contact />} />
        <Route path='aboutus' exact element={<AboutUs />} />
        <Route path='package' exact element={<TripPackage />} />
        <Route path='terms' exact element={<TermConditons />} />
      </Routes>
    </ScrollgToTop>
  </Router>
)

const phoneNumber = '8790336560';
const message = 'Hello!';

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

function App() {
  
  return (
    <div className="App">
      {routes}
      <div className='iconWhatsapp'>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} style={{
            color: "green",
            width: '30px'
          }} />
        </a>
      </div>
    </div>
  );
}

export default App;
