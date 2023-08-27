import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import SingleProducts from "./Pages/SingleProducts";



function App() {
  return (
    <div className="App">
      {/* <Cart/> */}
      {/* <SingleProducts/> */}
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
