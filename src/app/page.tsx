import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Text Section */}
        <div className="home-text">
          <h1>
            <span className="intro">Hi, I'm Minhal</span>
            <span className="headline">I'M A WEB</span>
            <span className="headline">DEVELOPER</span>
          </h1>
          <section className="description">
            <p>A warm welcome to my portfolio! I am a full stack web</p>
            <p>developer who puts his heart into his work, transforming</p>
            <p>ideas into great digital experiences.</p>
            <p>With knowledge of both front-end and back-end</p>
            <p>technologies, I work closely with clients to understand</p>
            <p>their requirements and provide unique solutions.</p>
            <p>Let’s make a great piece together!</p>
          </section>

          {/* Button Section */}
          <div className="button-container">
            <a href="/#" className="view-projects-button">
              VIEW MY PROJECTS
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="home-image">
          <img src="/pfpp.png" alt="Portfolio image of Minhal" />
        </div>
      </div>
    </div>
  );
};

export default Home;
