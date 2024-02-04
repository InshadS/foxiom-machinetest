import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../utils/LocalStorage';
import { CiLogout } from 'react-icons/ci';

const Home = () => {
  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = () => {
    LocalStorageService.clearAccessToken();
    navigate('/login');
  };

  return (
    <div>
      <nav className='border-b-2 py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-indigo-600 text-2xl font-bold'>Foxiom</h1>
          <button
            onClick={handleLogout}
            className=' border hover:font-bold py-2 px-4 rounded flex items-center gap-2'
          >
            <CiLogout />
            Logout
          </button>
        </div>
      </nav>
      <div className='container mx-auto'>
        <h1 className='py-12 text-center text-4xl font-bold'>
          Welcome back <span className='text-indigo-400'>User!</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
