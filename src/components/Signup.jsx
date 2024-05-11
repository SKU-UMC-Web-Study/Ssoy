import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

const AddtionCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const Addition = styled.p`
  color: white;
  margin-right: 20px;
`;

const Error = styled.p`
  color: red;
`;

const Signup = () => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/login');
    
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <InputCon onSubmit={handleSubmit(onSubmit)}>
          <Title>회원가입 페이지</Title>
          <InputBox placeholder="이름을 입력해주세요" type="text" name='name' {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })} />
          {errors.name && errors.name.type === 'required' && (<Error>이름을 입력해주세요</Error>)}
          {errors.name && errors.name.type === 'pattern' && (<Error>이름은 문자열이어야 합니다</Error>)}
          <InputBox placeholder="이메일을 입력해주세요" type="email" name='email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && errors.email.type === 'pattern' && (<Error>이메일 양식에 맞지 않습니다</Error>)}
          {errors.email && errors.email.type === 'required' && (<Error>이메일을 입력해주세요</Error>)}
          <InputBox placeholder="나이를 입력해주세요" type="text" name='age' {...register('age', { required: true, min: { value: 19, message: "나이는 19세 이상이어야 합니다" }, pattern: { value: /^[0-9]+$/, message: "숫자로 작성하여야 합니다" } })} />
          {errors.age && <Error>{errors.age.message}</Error>}
          <InputBox placeholder="비밀번호를 입력해주세요" type="password" {...register('password', { required: true, minLength: 4, maxLength: 12, pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/ })} />
          {errors.password && errors.password.type === 'required' && <Error>비밀번호를 입력해주세요</Error>}
          {errors.password && errors.password.type === 'minLength' && <Error>비밀번호는 최소 4자리 이상이어야 합니다</Error>}
          {errors.password && errors.password.type === 'maxLength' && <Error>비밀번호는 최대 12자리까지 가능합니다</Error>}
          {errors.password && errors.password.type === 'pattern' && <Error>영어, 숫자, 특수문자를 조합해서 작성해주세요</Error>}
          <InputBox placeholder="비밀번호를 다시 입력해주세요" type="password" {...register('confirmpassword', { required: true, validate: (value) => value === watch('password') })} />
          {errors.confirmpassword && errors.confirmpassword.type === 'required' && <Error>비밀번호를 입력해주세요</Error>}
          {errors.confirmpassword && errors.confirmpassword.type === 'validate' && <Error>비밀번호가 일치하지 않습니다</Error>}
          <SubmitBtn type="submit">제출하기</SubmitBtn>
          <AddtionCon>
            <Addition>이미 아이디가 있으신가요?</Addition>
            <Addition>로그인 페이지로 이동하기</Addition>
          </AddtionCon>
        </InputCon>
      </div>
    </>
  );
};

export default Signup;
