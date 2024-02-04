import { useState } from 'react';
import { login } from '../api';
import LinkedInLoginComponent from '../components/LinkedInLogin';
import GoogleLoginComponent from '../components/GoogleLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(email, password);
      console.log(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='max-w-md w-full mx-4'>
        <div className=' shadow-md rounded-md p-8'>
          <h2 className='text-2xl font-bold mb-8 text-center'>
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit} className='space-y-6 mb-6'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500'
                placeholder='Email address'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500'
                placeholder='Password'
              />
            </div>
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          {error && <p className='text-red-500'>{error}</p>}

          <div className='text-center mb-4 relative'>
            <hr className='absolute left-0 top-1/2 w-1/4 border-gray-300 transform -translate-y-1/2' />
            <span className='text-gray-500 inline-block px-2'>
              or continue with
            </span>
            <hr className='absolute right-0 top-1/2 w-1/4 border-gray-300 transform -translate-y-1/2' />
          </div>
          <div className='flex flex-col md:flex-row md:space-x-4 items-center w-full gap-3'>
            <LinkedInLoginComponent />
            <GoogleLoginComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
