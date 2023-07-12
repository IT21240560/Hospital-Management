import React, { Fragment , useState} from "react";
import "../CSS/About.css"


const About = () => {
    const [toggleTab, setToggleTab] = useState(1)
    const toggleState = (index) => {
        setToggleTab(index)
    }
  return (
    <Fragment>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
          <div className="column">
            <div className="tabs">
              <div className={toggleTab === 1 ? "single-tab active-tab" : "single-tab"}
              onClick = {() => toggleState(1)}
              >
                <h2>About Us</h2>
              </div>
              <div className={toggleTab === 2 ? "single-tab active-tab" : "single-tab"}
              onClick = {() => toggleState(2)}
              >
                <h2>Services</h2>
              </div>
              <div className={toggleTab === 3 ? "single-tab active-tab" : "single-tab"}
              onClick = {() => toggleState(3)}
              >
                <h2>Mission & Vision</h2>
              </div>
            </div>
            <div className="tab-content">
              {/*About Content*/}
              <div className={toggleTab === 1 ? "content active-content" : "content"}>
                <h2>Our Story</h2>
                <p>
                  {" "}
                  Our hospital was founded with the vision of providing exceptional healthcare services to the community. It began as a small clinic in the heart of the city, staffed by dedicated physicians and nurses who were committed to improving the health and well-being of their patients. Over time, our hospital grew in size and reputation, expanding our facilities and services to meet the evolving needs of our community. Today, we are proud to be a leading provider of high-quality healthcare, known for our commitment to excellence and compassionate care. We remain true to our roots, honoring the legacy of our founders by putting patients first and delivering the best possible care to every person who walks through our doors.
                </p>
                <h3>We take care of you</h3>
                <p>
                Within the safe confines of our ultra-clean hospital environments, we employ experienced healthcare professionals to care for you. Our medical and support staff is trained to provide compassionate care while paying attention to detail. You and your family members can enjoy the high end comfort of our hospital rooms, designed to help expedite the recovery process.
                </p>
              </div>

              {/*Services Content*/}

              <div className={toggleTab === 2 ? "content active-content" : "content"}>
                <h2>Our Services</h2>
                <p>
                  {" "}
                  At ABC Hospitals, we strive to offer you international
                  standard care assured with safety, best clinical outcomes and
                  customer experience. Our international accreditations,
                  adherence to global best practices and quality standards
                  coupled with innovative digital solutions are testimonies of
                  our delivery of this promise.
                </p>
                <h3>According to a consumer survey</h3>
                <p>
                We take care of your preventive and curative healthcare requirements at our state-of-the-art facilities. Collectively, our hospitals can accommodate 190 in-house patients where you can be rest assured of receiving care on par with international standards. Our island wide laboratory services network is well-equipped with the cutting-edge technology, equipment and skilled professionals to provide accurate diagnostic investigations. We’ve purposely built our hospitals to align with international standards and equipped each area with the latest technological advancements. You can visit our Accident and Emergency units any time during the day and night to receive medical or surgical emergency care.
                </p>

                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>ICU</h3>
                      <div className="progress">
                        <div className="progress-bar ICU">
                          <span>99%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Staff</h3>
                      <div className="progress">
                        <div className="progress-bar staff">
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>24/7 Service</h3>
                      <div className="progress">
                        <div className="progress-bar service">
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Ambulance</h3>
                      <div className="progress">
                        <div className="progress-bar Ambulance">
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*About3 Content*/}
              <div className={toggleTab === 3 ? "content active-content" : "content"}>
                <div className="exp-column">
                    <h3>Our Mission</h3>
                    <span>2023</span>
                    <p>Our mission is to provide the highest quality healthcare services to our patients in a compassionate and caring environment. We strive to exceed our patients' expectations by offering innovative treatments and state-of-the-art technology while respecting their privacy and dignity. We are committed to fostering an environment that values and supports our employees, physicians, and volunteers, recognizing that they are our most important asset. We work tirelessly to improve the health and well-being of our community by promoting healthy living and preventive care.</p>
                </div>

                <div className="exp-column">
                    <h3>Our Vision</h3>
                    
                    <p>Our vision is to be the premier healthcare provider in our region, recognized for excellence in patient care, medical education, and research. We are dedicated to delivering the highest quality of care to our patients, utilizing the latest medical advancements and technology. We will achieve this vision by creating a culture of excellence, innovation, and teamwork, where our employees are empowered to provide exceptional service and our physicians are leaders in their fields. We will continue to evolve and adapt to the changing needs of our community, always putting the patient first.</p>
                </div>

                <div className="exp-column">
                    <h3>ABC Hospitals Sri Lanka</h3>
                    <span>2000 - 2023</span>
                    <p>ABC Hospitals has embarked on a digital journey to be Sri Lanka’s No.1 Smart Hospital. We have already introduced many innovative digital health solutions including Tele medicine, Online pharmacy, Online laboratory portal and Tele physiotherapy.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;