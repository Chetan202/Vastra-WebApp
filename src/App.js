import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Navbar/Header";
import Registration from "./components/Registration/Reg";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/Home/NotFound";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Router>
      {/* <Registration/> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/Shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
