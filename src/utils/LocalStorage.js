class LocalStorageService {
  // Set access token in local storage
  static setToken = (access_token) => {
    localStorage.setItem('access_token', access_token);
  };

  // Get access token from local storage
  static getAccessToken = () => {
    return localStorage.getItem('access_token');
  };

  // Clear access token and user data from local storage
  static clearAccessToken = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  };

  // Set user data in local storage
  static setUser = (user) => {
    localStorage.setItem('user', user);
  };

  // Get user data from local storage
  static getUser = () => {
    return localStorage.getItem('user');
  };
}

export default LocalStorageService;
