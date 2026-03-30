
import { Routes, Route } from 'react-router-dom';
import './App.css';
import GlobalContextProvider from './context/GlobalContext';
import NavigationMenu from './components/NavigationMenu';
import ToggleSwitch from './components/ToggleSwitch';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import BrunchMenu from './pages/Brunch';
import BarMenu from './pages/Bar';
import DessertMenu from './pages/Dessert';
import DinnerMenu from './pages/Dinner';
import ContactUsPage from './pages/ContactUs';
import ReservationPage from './pages/Reserve';
import AboutUs from './pages/About';
function App() {
  return (
    <GlobalContextProvider>
    <div className="App">
    <ToggleSwitch/>
    <NavigationMenu/>
  <Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path='/menu' element={<Menu></Menu>}></Route>
  <Route path='/dinner' element={<DinnerMenu></DinnerMenu>}></Route>
  <Route path='/brunch' element={<BrunchMenu></BrunchMenu>}></Route>
  <Route path='/dessert' element={<DessertMenu></DessertMenu>}></Route>
  <Route path='/bar' element={<BarMenu></BarMenu>}></Route>
  <Route path='/reserve' element={<ReservationPage></ReservationPage>}></Route>
  <Route path='/about' element={<AboutUs></AboutUs>}></Route>
  <Route path='/contact' element={<ContactUsPage></ContactUsPage>}></Route>
  </Routes>
  <Footer/>
    </div>
    </GlobalContextProvider>
    
  );
}

export default App;
