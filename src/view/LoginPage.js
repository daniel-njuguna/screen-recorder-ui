import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for the LoginPage
import googleIcon from '../images/download.png'; // Import Google icon image
import facebookIcon from '../images/facebook.png'; // Import Facebook icon image
import logo from '../images/favicon.ico'; // Import your logo image

function LoginPage() {
  // Define states for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define functions to handle Google and Facebook login
  const handleGoogleLogin = () => {
    // Implement Google login logic here
    // You can use a library like Firebase for authentication
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
    // You can use a library like Firebase for authentication
  };

  // Function to handle email and password login
  const handleEmailLogin = () => {
    // Implement email and password login logic here
    // You can use a library like Firebase for authentication
  };

  return (
    <div className="login-page">
      <header>
        <div className="header-left">
          <img src={logo} alt="HelpMeOut Logo" className="logo" />
          <h1>HelpMeOut</h1>
        </div>
      </header>
      <h2>Join the millions of others in HelpMeOut</h2>
      <div className="login-buttons">
        {/* Google Login Button */}
        <button className="google-button" onClick={handleGoogleLogin}>
          <img src={googleIcon} alt="Google Icon" />
          Continue with Google
        </button>

        {/* Facebook Login Button */}
        <button className="facebook-button" onClick={handleFacebookLogin}>
          <img src={facebookIcon} alt="Facebook Icon" />
          Continue with Facebook
        </button>
      </div>

      {/* Email and Password Form */}
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>

      <footer>
        <p>&copy; 2023 HelpMeOut Extension</p>
      </footer>
    </div>
  );
}

export default LoginPage;
