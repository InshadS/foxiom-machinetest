import { FaLinkedin } from 'react-icons/fa';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import { useNavigate } from 'react-router-dom';

const LinkedInLoginComponent = () => {
  const navigate = useNavigate();

  const handleLinkedInLoginSuccess = (data) => {
    console.log(data);
    navigate('/');
  };

  const handleLinkedInLoginFailure = (error) => {
    console.error(error);
  };

  return (
    <LinkedIn
      clientId={import.meta.env.VITE_LINKEDIN_CLIENT_ID}
      redirectUri={`${window.location.origin}/linkedin`}
      onSuccess={handleLinkedInLoginSuccess}
      onError={handleLinkedInLoginFailure}
    >
      {({ linkedInLogin }) => (
        <button
          onClick={linkedInLogin}
          className='border bg-[#0077b5] py-2 text-white px-4 rounded-md flex items-center justify-center w-full md:w-1/2 text-center'
        >
          <FaLinkedin color='white' size={24} />
          <span className='ml-1'>LinkedIn</span>
        </button>
      )}
    </LinkedIn>
  );
};

export default LinkedInLoginComponent;
