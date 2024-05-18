
import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => { // 지정된 시간 이후에 실행되는 함수
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer); // 이전에 설정된 타이머를 취소하는 함수
    }; 
  }, [value]);

  return debouncedValue;
};

export default useDebounce;