import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();
  const signup = async (name, email, age, username, password, passwordCheck) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8080/auth/signup', {
        name,
        email,
        age,
        username,
        password,
        passwordCheck
      });

      if (response.status === 201) {
        setToken(response.data.token);
        setUsername(response.data.username);
        console.log(response.data);
        alert('회원가입이 정상적으로 처리되었습니다.');
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || '에러가 발생함');
    } 
      setLoading(false);
    
  };

  return {
    signup,
    loading,
    error,
    token,
    username
  };
};

export default useSignup;
