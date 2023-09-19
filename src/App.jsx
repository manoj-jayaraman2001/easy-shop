import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<Products />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
