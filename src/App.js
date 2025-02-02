import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CataloguePage from "./pages/CataloguePage";
import ProductPage from "./pages/ProductPage";
import products from "./data/products";
import RegistrationPage from "./pages/RegistrationPage";
import ShoppingCart from "./pages/ShoppingCart";
import { CartProvider } from "./context/CartContext"; // Import CartProvider


function App() {
  return (
    <div className="App">
      <CartProvider> {/* Обёртываем всё приложение в CartProvider */}
        <Header />

        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route
              path="/catalogue/:id"
              element={<ProductPage products={products} />}
            />

          </Routes>
        </Router>
        <Contact />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;