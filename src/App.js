import "./App.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/register/register.page";
import UserDashboard from "./pages/Dashboard/dashboard.page.user";
import EmployerDashboard from "./pages/Dashboard/dashboard.page.employer";
import Login from "./pages/login/login.page";
import {AuthGuard} from "./AuthGuard/auth.guard";
import {Role} from "./common/models/Role";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound/NotFound";
import PostJob from "./pages/PostAJob/PostJob";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                {/*<Sidebar />*/}
                <div className="container">
                    <Routes>
                        <Route path="/signin" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route
                            path="/employerDashboard"
                            element={
                                <AuthGuard role={[Role.EMPLOYER]}>
                                    <EmployerDashboard/>
                                </AuthGuard>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <AuthGuard role={[Role.USER]}>
                                    <UserDashboard/>
                                </AuthGuard>
                            }
                        />
                        <Route path="/createJob" element={
                                <AuthGuard role={[Role.EMPLOYER]}>
                                    <PostJob/>
                                </AuthGuard>
                            }
                        />

                        <Route path="/post-a-job" element={<AuthGuard role={[Role.EMPLOYER]}>
                            <PostJob/>
                        </AuthGuard>}
                        />

                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
