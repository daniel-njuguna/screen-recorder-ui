import React from 'react';
import './styles.css';
import logo from '../images/favicon.ico'; // Import your logo image
import arrowIcon from '../images/arrow-right.png'; // Import your arrow icon image
import icon1 from '../images/Icon placeholder.png'; // Import your icon1 image
import icon2 from '../images/Icon placeholder (1).png'; // Import your icon2 image
import icon3 from '../images/Icon placeholder (2).png'; // Import your icon3 image
import feature1Image from '../images/AdobeStock_400053098 1.png'; // Import your feature1 image
import feature2Image from '../images/Frame 1000002596.png'; // Import your feature2 image
import feature3Image from '../images/woman-using-smartphone-technology 2.png'; // Import your feature3 image
import featureImage from '../images/Video Repository.png'; // Import your feature image
import image1 from '../images/rec-1.cb7888a47e24214aeb105805426a8300.svg.png'; // Import your image for step 1
import image2 from '../images/rec-1.cb7888a47e24214aeb105805426a8300.svg.png'; // Import your image for step 2
import image3 from '../images/rec-1.cb7888a47e24214aeb105805426a8300.svg.png'; // Import your image for step 3

function LandingPage({ onGetStartedClick }) {
  return (
    <div>
      <header>
        <div className="header-left">
          <img src={logo} alt="HelpMeOut Logo" className="logo" />
          <h1>HelpMeOut</h1>
        </div>
        <div className="header-center">
        <button className="features-button" onClick={() => scrollToSection('features')}>
            Features
          </button>
          <button className="how-it-works-button" onClick={() => scrollToSection('how-it-works')}>
            How It Works
          </button>
        </div>
        <div className="header-right">
          {/* Replace the Log In button with the Get Started button */}
          <button className="button" onClick={onGetStartedClick}>Get Started</button>
        </div>
      </header>

      {/* Home Section */}
      <main>
        <section className="main-content">
          <div className="main-left">
            <h2>
              <b>Show Them</b> <br />
              <b>Don’t Just Tell,</b>
            </h2>
            <p>
              Help your friends and loved ones by creating and sending videos on how to get things done on a website.
            </p>
            <button className="install-button">
              Install HelpMeOut <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
            </button>
          </div>
          <div className="main-right">
            <div className="image-container">
              <img src={feature1Image} alt="Feature 1" style={{ margin: '10px' }} />
              <img src={feature2Image} alt="Feature 2" style={{ margin: '10px' }} />
            </div>
            <img src={feature3Image} alt="Feature 3" className="feature3-image" />
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-left">
          <h3 className="features-title"><b>Features</b></h3>
          <div className="feature">
            <div className="highlight-icon"><img src={icon1} alt="Icon 1" /></div>
            <div className="highlight-text">
              <h4>Simple Screen Recording</h4>
              <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
          </div>
          <div className="feature">
            <div className="highlight-icon"><img src={icon2} alt="Icon 2" /></div>
            <div className="highlight-text">
              <h4>Easy-to-Share URL</h4>
              <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
            </div>
          </div>
          <div className="feature">
            <div className="highlight-icon"><img src={icon3} alt="Icon 3" /></div>
            <div className="highlight-text">
              <h4>Revisit Recordings</h4>
              <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
            </div>
          </div>
        </div>
        <div className="features-right">
          <img src={featureImage} alt="Feature Image" className="feature-image" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
  <h2>How it works</h2>
  <div className="how-it-works-cards">
    <div className="how-it-works-card">
      <div className="how-it-works-card-content">
        <div className="how-it-works-card-number">1</div>
        <b>Record Screen</b>
        <p>
          Click the "Start Recording" button in our extension. Choose which part of your screen to capture and who you want to send it to.
        </p>
        <img src={image1} alt="Step 1" />
      </div>
    </div>
    <div className="how-it-works-card">
      <div className="how-it-works-card-content">
        <div className="how-it-works-card-number">2</div>
        <b>Share Your Recording</b>
        <p>
          We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.
        </p>
        <img src={image2} alt="Step 2" />
      </div>
    </div>
    <div className="how-it-works-card">
      <div className="how-it-works-card-content">
        <div className="how-it-works-card-number">3</div>
        <b>Learn Effortlessly</b>
        <p>
          Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
        </p>
        <img src={image3} alt="Step 3" />
      </div>
    </div>
  </div>
</section>

<footer className="footer">
  <div className="footer-left">
    <img src={logo} alt="Footer Logo" className="footer-logo" />
    <h6>HelpMeOut</h6>
  </div>
  <div className="footer-columns">
    <div className="footer-column">
      <h4>Menu</h4>
      <ul>
        <li>Home</li>
        <li>Converter</li>
        <li>How it Works</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>About us</h4>
      <ul>
        <li>About</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Screen Record</h4>
      <ul>
        <li>Browser Window</li>
        <li>Desktop</li>
        <li>Application</li>
      </ul>
    </div>
  </div>
</footer>

    </div>
  );

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default LandingPage;
