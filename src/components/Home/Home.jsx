import React from "react";
import HomeSlider from "./Slider";
import Story from "./Story";
import AttractiveMenu from "./AttractiveMenu";
import Discount from "./Discount";
import Footer from "./../Shared/Footer";

function Home() {
    return (
        <>
        <HomeSlider />
        <Story />
        <AttractiveMenu />
        <Discount />
        <Footer />
        </>
    )
}

export default Home;