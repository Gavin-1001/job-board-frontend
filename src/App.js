import "./App.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/register/register.page";
import UserDashboard from "./pages/Dashboard/dashboard.page.user";
import EmployerDashboard from "./pages/Dashboard/dashboard.page.employer";
import Sidebar from "./pages/Dashboard/dashboard.page.employer";
import Login from "./pages/login/login.page";
import {AuthGuard} from "./AuthGuard/auth.guard";
import {Role} from "./common/models/Role";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound/NotFound";
import PostJob from "./pages/PostAJob/PostJob";
import TestNavbar from "./components/Navbar/testNavbar";


function App() {
    const linksForNavbar = [
        {url: '/register', text: 'Register'},
        {url: '/signin', text: 'Signin'},
        {url: '/contact', text: 'Contact'}
    ];
    return (
        <BrowserRouter>

            {/*<Navbar/> real navbar here*/}

            <div>
                {/*<TestNavbar links={links} />*/}
                <TestNavbar links={linksForNavbar}/>
                {/* Rest of your application */}
            </div>

            {/*<Navbar title="NavBar" content=""*/}

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
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </BrowserRouter>
)

}

export default App;
