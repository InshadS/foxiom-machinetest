import { GoogleLogin } from '@react-oauth/google';
import LocalStorageService from '../utils/LocalStorage';
import { useNavigate } from 'react-router-dom';

const GoogleLoginComponent = () => {
  const navigate = useNavigate();

  // Handle Google login success
  const handleGoogleLoginSuccess = (credentialResponse) => {
    LocalStorageService.setToken(credentialResponse.credential);
    navigate('/'); // Redirect to the home page after successful login
  };

  // Handle Google login failure
  const handleGoogleLoginFailure = (error) => {
    console.error(error);
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLoginSuccess}
      onFailure={handleGoogleLoginFailure}
      theme='filled_black'
      size='large'
      width='0'
    />
  );
};

export default GoogleLoginComponent;
