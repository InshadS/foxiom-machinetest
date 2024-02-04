// login function to authenticate users
const login = async (email, password) => {
  try {
    // Make a POST request to the login endpoint
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('An unexpected error occurred');
  }
};

export { login };
