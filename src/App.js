import "./App.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/register/register.page";
import UserDashboard from "./pages/Dashboard/dashboard.page.user";

import {AuthGuard} from "./AuthGuard/auth.guard";
import {Role} from "./common/models/Role";
import EmployerDashboard from "./pages/Dashboard/dashboard.page.employer";
import Login from "./pages/login/login.page";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <div className="container">
                    <Routes>
                        {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> */}
                        <Route path="/signin" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route
                            path="/dashboard"
                            element={
                                <AuthGuard role={[Role.USER]}>
                                    <UserDashboard/>
                                </AuthGuard>
                            }
                        />
                        <Route
                            path="/EmployerDashboard"
                            element={
                                <AuthGuard role={[Role.EMPLOYER]}>
                                    <EmployerDashboard/>
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
