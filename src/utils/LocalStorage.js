class LocalStorageService {
  static setToken = (access_token) => {
    localStorage.setItem('access_token', access_token);
  };

  static getAccessToken = () => {
    return localStorage.getItem('access_token');
  };

  static clearAccessToken = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  };

  static setUser = (user) => {
    localStorage.setItem('user', user);
  };

  static getUser = () => {
    return localStorage.getItem('user');
  };
}
export default LocalStorageService;
