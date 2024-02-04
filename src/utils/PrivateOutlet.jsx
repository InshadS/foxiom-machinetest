import { Navigate } from 'react-router-dom';
import LocalStorageService from './LocalStorage';
import Home from '../pages/Home';

function PrivateOutlet() {
  const isAuthenticated = () => {
    return LocalStorageService.getAccessToken();
  };
  return isAuthenticated() ? (
    <>
      <Home />
    </>
  ) : (
    <Navigate to='/login' />
  );
}

export default PrivateOutlet;
