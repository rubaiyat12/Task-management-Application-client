import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-slate-400" >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;