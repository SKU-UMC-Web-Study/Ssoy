import { useEffect, useState } from 'react';
import axios from 'axios';

const useCredit = (url) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await axios.get(url);
        setCredits(response.data.cast || []);
        console.log(response.data.cast); // 구조 확인을 위한 로그
      } catch (e) {
        console.log(e);
      }
    };

    fetchCredits();
  }, [url]);

  return { credits };
};

export default useCredit;

