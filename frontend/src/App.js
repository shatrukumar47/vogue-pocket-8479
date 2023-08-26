import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import MainRoutes from './Routes/MainRoutes';
import Footer from './Components/Footer';



import SimpleSlider from './Components/Carousel';




function App() {
  return (
    <div className="App">
    
    
       <Navbar />
      <MainRoutes />

      <Footer />
  


    </div>
  );
}

export default App;
