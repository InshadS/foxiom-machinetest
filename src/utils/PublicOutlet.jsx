import { Navigate } from 'react-router-dom';
import LocalStorageService from './LocalStorage';
import Login from '../pages/Login';

function PublicOutlet() {
  const isAuthenticated = () => {
    return LocalStorageService.getAccessToken();
  };
  return isAuthenticated() ? <Navigate to='/' /> : <Login />;
}

export default PublicOutlet;
