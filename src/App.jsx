import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicOutlet from './utils/PublicOutlet';
import PrivateOutlet from './utils/PrivateOutlet';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicOutlet />}>
          <Route path='/login' element={<Login />} />
          {/* <Route
            path='/sociallogin/google/'
            element={<GoogleCallbackPage />}
          ></Route>
          <Route
            path='/sociallogin/facebook/'
            element={<FacebookCallbackPage />}
          ></Route> */}
        </Route>
        <Route element={<PrivateOutlet />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
