import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-3 justify-center items-center h-screen'>
      <span className='text-4xl font-bold text-red-400'>404</span>
      <h2>Page not found!</h2>

      <button onClick={() => navigate('/')} className='border-2 p-2 rounded-md'>
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;
