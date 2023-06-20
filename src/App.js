import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/register/register.page";
import UserDashboard from "./pages/Dashboard/dashboard.page.user";
import Login from "./pages/login/login.page";
import {AuthGuard} from "./AuthGuard/auth.guard";
import {Role} from "./common/models/Role";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route
                path="/dashboard"
                element={
                    <AuthGuard role={[Role.USER]}>
                        <UserDashboard />
                    </AuthGuard>
                }
            />
          </Routes>
          </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
