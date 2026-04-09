import React from "react";
import "./Home.css";
import about from "../images/about.png"
import { FaCode, FaMobileAlt, FaPalette, FaChartLine } from "react-icons/fa";
import Footer from "./Footer";

const Home = () => {
  return (                                
    <div className="home-container">
      <div className="circle-blue"></div>
      <div className="circle-green"></div>
      <div className="circle-purple"></div> 
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Main content */}
      <div className="content text-center">
        <h1 className="main-heading fade-up">
          Innovating the <span className="blue-text">Future</span>
        </h1>

        <p className="subtitle fade-up">
          We create cutting-edge software solutions that transform
          businesses and drive digital innovation forward.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-4 fade-up">
          <button className=" btn btn-primary-custom">
            Explore Our Services →
          </button>

          <button className=" btn btn-outline-custom">
            Get In Touch
          </button>
        </div>
      </div>

     
        <div className="about-section text-center py-5">
          
            <h2 className="about-heading ">About Nexora Technologies</h2>
            <p className="about-paragraph">Founded with a vision to revolutionize the digital landscape,
        Nexora Technologies combines innovation, expertise, and passion
        to deliver exceptional software solutions. We believe in creating
        technology that not only meets today's needs but anticipates tomorrow's challenges.</p>

          <div className="mission-container">
          <div className="mission-text">
            <h3 className="mission-heading">
              Our Mission
            </h3>
            <p className="mission-paragraph">
              To empower businesses with innovative technology solutions that drive<br></br> 
              growth, efficiency, and competitive advantage in the digital age.
            </p>

            <h3 className="mission-heading">Our Vision</h3>
      <p className="mission-paragraph">
        To be the leading technology partner that transforms ideas into reality,
        creating a more connected and efficient world through cutting-edge software solutions.
      </p>
          </div>
          
          <div className="mission-image">
            <img src={about} alt="about" className="team-image"/>
          </div>
          

        </div>
        </div>
        <div className="services-section py-5">

      <div className="container">

        {/* 🔹 HEADING */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 mb-3">
            Our Services
          </h2>

          <p className="text-muted mx-auto services-subtext">
            We offer comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        {/* 🔹 CARDS */}
        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="service-card h-100">
              <div className="icon-box bg-primary">
                <FaCode />
              </div>
              <h5 className="fw-bold mt-3">Web Development</h5>
              <p className="text-muted">
                Modern, responsive websites built with cutting-edge technologies.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="service-card h-100">
              <div className="icon-box bg-success">
                <FaMobileAlt />
              </div>
              <h5 className="fw-bold mt-3">Mobile Apps</h5>
              <p className="text-muted">
                Native and cross-platform mobile applications.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="service-card h-100">
              <div className="icon-box bg-purple">
                <FaPalette />
              </div>
              <h5 className="fw-bold mt-3">UI/UX Design</h5>
              <p className="text-muted">
                Beautiful, intuitive designs that enhance user experience.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="service-card h-100">
              <div className="icon-box bg-orange">
                <FaChartLine />
              </div>
              <h5 className="fw-bold mt-3">Digital Marketing</h5>
              <p className="text-muted">
                Strategic marketing solutions to grow your digital presence.
              </p>
            </div>
          </div>

        </div>

        {/* 🔹 BUTTON */}
        <div className="text-center mt-5">
          <button className="btn btn-primary px-4 py-2 rounded-pill">
            View All Services →
          </button>
        </div>

      </div>
    </div>



    <div className="testimonials-section py-5">

      <div className="container">

        {/* 🔹 HEADING */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 mb-3">
            What Our Clients Say
          </h2>

          <p className="text-muted mx-auto testimonials-subtext">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        {/* 🔹 CARDS */}
        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-md-4">
            <div className="testimonial-card h-100">

              <div className="stars">★★★★★</div>

              <p className="testimonial-text">
                "Nexora Technologies transformed our digital presence completely. Their expertise in web development is unmatched."
              </p>

              <h6 className="fw-bold mb-0">Selva Kumar</h6>
              <small className="text-muted">We define Net</small>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4">
            <div className="testimonial-card h-100">

              <div className="stars">★★★★★</div>

              <p className="testimonial-text">
                "The mobile app they developed exceeded our expectations. Professional, reliable, and innovative team."
              </p>

              <h6 className="fw-bold mb-0">Jay</h6>
              <small className="text-muted">Quantumspark technology pvt ltd</small>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4">
            <div className="testimonial-card h-100">

              <div className="stars">★★★★★</div>

              <p className="testimonial-text">
                "Outstanding UI/UX design work. They truly understand how to create engaging user experiences."
              </p>

              <h6 className="fw-bold mb-0">Hariharasudhan</h6>
              <small className="text-muted">Skylark Digi Solutions</small>

            </div>
          </div>

        </div>

      </div>

    </div>
 <Footer/>

    </div>
  );
};

export default Home;