import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useGetUser = () => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (!token) {
          navigate('/login');
          return;
        }
    
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/auth/me', {
              headers: { Authorization: `Bearer ${token}` }
            });
            setUsername(response.data.username);
          } catch (error) {
            console.error(error);
          }
          setLoading(false);
        };
    
        fetchData();
      }, [navigate]);
    
      return {loading, username};
    };

export default useGetUser;