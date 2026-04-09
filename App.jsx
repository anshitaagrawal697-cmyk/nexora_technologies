import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
// import About from "./components/About";
// import Service from "./components/Service";
// import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
     <Footer/>
      
    </BrowserRouter>
  );
}

export default App;