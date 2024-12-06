import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const HomeLayout = () => {
    return (
        <div className="bg-[#FAFAFA]">
             <ToastContainer />
            <nav className="bg-sky-700">
                <Navbar></Navbar>
            </nav>
            <main className="min-h-[calc(100vh-240px)] w-10/12 mx-auto">
                <Outlet></Outlet> 
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;