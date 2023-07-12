import React from "react";
import './footer.css';
import fb from './facebook.png'
import twitter from './twitter.png'
import email from './email.png'
import linkedin from './linkedIn.png'


const Footer=()=>{
    return (
        <div className ="footer" style={{ height:500, width: '100%' }}>
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">

                        <h4>hOSPITAL</h4>

                        <a href="/employer">
                            <p>Employer</p>
                        </a>

                        <a href="/healthPlan">
                            <p>Health Plan</p>
                        </a>

                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>

                    <div className="sb__footer-links_div">

                        <h4>SERVICES</h4>

                        <a href="/employer">
                            <p>Clinic</p>
                        </a>

                        <a href="/employer">
                            <p>Treatment</p>
                        </a>

                        <a href="/employer">
                            <p>Pharmacy</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="https://hemashospitals.com/">
                            <p>Hemas Hospitals</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">

                        <h4>Company</h4>

                        <a href="/employer">
                            <p>About</p>
                        </a>

                        <a href="/employer">
                            <p>Press</p>
                        </a>

                        <a href="/employer">
                            <p>Career</p>
                        </a>

                        <a href="/employer">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming Soon On</h4>
                        <div className="socialMedia" style={{width: 50}}>
                            <p><img src={fb} alt="" height={50}/></p>
                            <p><img src={twitter} alt="" height={50}/></p>
                            <p><img src={linkedin} alt="" height={50}/></p>
                            
                            <p><img src={email} alt="" height={50}/></p>
                        </div>
                    </div>
                </div>
                <h4></h4>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">

                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>

                    </div>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Coockie Declaration</p></div></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;