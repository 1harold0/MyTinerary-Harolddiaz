import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function StandarLayout() {
    return(
        <>
        
        <Banner/>
        <Outlet>

        </Outlet>
        <Footer/>
        </>
      
    )
    
}                     