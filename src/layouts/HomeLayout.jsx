import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";


const HomeLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const handleCheckboxChange = (e) => {
        setIsDarkMode(e.target.checked);
    };
    //className="bg-[#E6F7F5] "
    const { loading } = useContext(AuthContext)

    return (
        <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-[#E6F7F5] text-black"}`}>
            <ToastContainer />
            <nav className="bg-[#0f4f47] sticky top-0 z-50">
                <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} handleCheckboxChange={handleCheckboxChange}></Navbar>
            </nav>
            <h2>
                {loading ? <span className="loading loading-bars loading-lg"></span> : ''}
            </h2>
            <main className="min-h-[calc(100vh-290px)] w-10/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;