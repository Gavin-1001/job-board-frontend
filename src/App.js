import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/register/register.page";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          // <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard /> } />
          </Routes>
          </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
