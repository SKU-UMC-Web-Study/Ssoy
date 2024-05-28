import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #262952;
    margin: 0;
    font-family: Arial, sans-serif; 
  }
`;

const InputBox = styled.input`
  border-radius: 16px;
  background-color: white;
  padding: 8px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  width: 500px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputCon = styled.form`
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 20px;
`;

const SubmitBtn = styled.button`
  border-radius: 16px;
  background-color: white;
  border: none;
  color: black;
  font-size: 16px;
  width: 500px;
`;

const Title = styled.h1`
  color: white;
`;

const Error = styled.p`
  color: red;
`;

const Login = () => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const { login, loading, error} = useLogin();


  const onSubmit = async (data) => {
    await login(data.id, data.password);
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <InputCon onSubmit={handleSubmit(onSubmit)}>
          <Title>로그인 페이지</Title>
          <InputBox placeholder ="아이디를 입력해주세요" type="text" name="id"{...register('id',{required :true, pattern:/^[A-Za-z0-9]+$/i })}/>
          {errors.id && errors.id.type === 'pattern' && (<Error>아이디는 문자열이어야 합니다</Error>)}
          <InputBox placeholder="비밀번호를 입력해주세요" type="password" {...register('password', { required: true, minLength: 4, maxLength: 12, pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/ })} />
          {errors.password && errors.password.type === 'required' && <Error>비밀번호를 입력해주세요</Error>}
          {errors.password && errors.password.type === 'minLength' && <Error>비밀번호는 최소 4자리 이상이어야 합니다</Error>}
          {errors.password && errors.password.type === 'maxLength' && <Error>비밀번호는 최대 12자리까지 가능합니다</Error>}
          {errors.password && errors.password.type === 'pattern' && <Error>영어, 숫자, 특수문자를 조합해서 작성해주세요</Error>}
          {loading && <p>Loading...</p>}
          {error && <Error>{error}</Error>}
          <SubmitBtn type="submit">로그인</SubmitBtn>
          
        </InputCon>
      </div>
    </>
  );
};

export default Login;
