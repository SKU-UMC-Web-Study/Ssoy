import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();
  const login = async ( username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password
      });
      if (response.status === 200) {
        setToken(token);
        setUsername(username);
        localStorage.setItem('token', response.data.token);
        console.log(response);
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || '에러가 발생함');
    } 
      setLoading(false);
    
  };

  return {
    login,
    loading,
    error,
    token,
    username
  };
};

export default useLogin;
