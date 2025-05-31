import "tailwindcss/tailwind.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
import Catalogue from "./components/Catalogue/Catalogue";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Gallery from "./components/Gallery/Gallery";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/Admin/AdminLogin";
import RequireAdminAuth from "./components/Admin/RequireAdminAuth";


function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />

          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/projectdetail/:id" element={<ProjectDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <RequireAdminAuth>
                <Admin />
              </RequireAdminAuth>
            }
          />
        </Routes>
        <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
