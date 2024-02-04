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
        {/* Public routes accessible without authentication */}
        <Route element={<PublicOutlet />}>
          {/* Route for the login page */}
          <Route path='/login' element={<Login />} />
        </Route>
        {/* Private routes requiring authentication */}
        <Route element={<PrivateOutlet />}>
          {/* Route for the home page */}
          <Route path='/' element={<Home />} />
        </Route>
        {/* Fallback route for handling invalid URLs */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
