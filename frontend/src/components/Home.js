import React from "react";

import BannerBackground from "../components/img1.jpg"
import BannerBackground1 from "../components/img2.jpg"
import BannerBackground2 from "../components/img3.jpg"
import BannerBackground3 from "../components/img4.jpg"
import BannerBackground4 from "../components/img5.jpg"
import BannerBackground5 from "../components/img6.jpeg"
import BannerBackground6 from "../components/sxs.png"



const Home = () => {
  return (
    <div className="home-container" style={{ backgroundColor: 'aliceblue' }}>
      <div className="home-banner-container">
        <div className="home-bannerImage-container"><a href="/ManageItems">
          <img src={BannerBackground6} alt="" style={{width: '50%', height: 'auto'}}/></a>

        </div>
        <div className="home-text-section">
          <h1 className="heading">
          Your health is our top priority, let us take care of you
          </h1>
          <p className="primary-text" style={{ fontSize: '2em', textAlign: 'center' }} >
          BC Hospitals has embarked on a digital journey to be Sri Lanka’s No.1 Smart Hospital. We have already introduced many innovative digital health solutions including Tele medicine, Online pharmacy, Online laboratory portal and Telephysiotherapy.
          </p>
          
        </div>
        <div className="home-image-section">
          <img src={BannerBackground1} alt="" style={{width: '100%', height: 'auto'}}/>
        </div>
        
        
        <div className="home-image-section3" style = {{marginBottom: "60px"}}>
          <a href="/ManagePatient">
          <img src={BannerBackground5} alt="" /></a>
        </div>

      
       
      </div>
    </div>
  );
}

export default Home;