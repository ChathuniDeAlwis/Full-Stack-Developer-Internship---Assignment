import React from 'react'; // Import React framework
import GoogleLogin from 'react-google-login'; // Import GoogleLogin component for Google authentication

const Login = () => { // Login component
  const responseGoogle = (response) => { // Function to handle Google login response
    console.log(response); // Log the response from Google login
    // Handle Google login response
  };

  return (
    <div> // Main container for Login component
      <h1>Login</h1> // Heading for login page
      <GoogleLogin // GoogleLogin component for Google authentication
        clientId="YOUR_CLIENT_ID" // Client ID for Google OAuth
        buttonText="Login with Google"
        onSuccess={responseGoogle} // Callback function for successful login
        onFailure={responseGoogle} // Callback function for failed login
        cookiePolicy={'single_host_origin'} // Cookie policy for Google login
      />
    </div>
  );
};

export default Login;
