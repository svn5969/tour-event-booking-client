import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Project from '../Project/Project';
import Review from '../Review/Review';
import Service from '../Service/Service';
// import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home">
            <Header/>
            <HeaderMain/>
            </div>
           
            {/* <Slider/> */}
            <Service/>
            <Project/>
            <Review/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;