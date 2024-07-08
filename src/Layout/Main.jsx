import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import TopHeader from "../pages/shared/TopHeader/TopHeader";


const Main = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <div className="">
        <div className=" max-w-7xl mx-auto">
          <Navbar></Navbar>
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;