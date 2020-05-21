import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import TopContent from '../components/Home/TopContent'
import PopularCategories from '../components/Home/PopularCategories'
import NewArrival from '../components/Home/NewArrival'
const HomePage = () => {
    return(
        <div className="home-page">
            <Header/>
            <div id="content">
                <TopContent/>
                <PopularCategories/>
                <NewArrival/>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;