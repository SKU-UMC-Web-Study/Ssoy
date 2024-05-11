import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

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
  width:300px;
  margin-bottom: 30px;
`;

const InputCon = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 20px;
`;

const SubmitBtn = styled.button`
  border-radius: 16px;
  background-color: white;
  border:none;
  color: black;
  font-size: 16px;
  width:300px;
  
`;
const Title = styled.h1`
color:white;
`
const AddtionCon =styled.div `

`
const Addition= styled.p`
color:white;
`

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <InputCon>
          <Title>회원가입 페이지</Title>
          <InputBox placeholder="이름을 입력해주세요" type="text" name="name" value={form.name} onChange={handleChange} />
          <InputBox placeholder="이메일을 입력해주세요" type="email" name="email" value={form.email} onChange={handleChange} />
          <InputBox placeholder="나이를 입력해주세요" type="text" name="age" value={form.age} onChange={handleChange} />
          <InputBox placeholder="비밀번호를 입력해주세요" type="password" name="password" value={form.password} onChange={handleChange} />
          <InputBox placeholder="비밀번호를 다시 입력해주세요" type="password" name="confirmpassword" value={form.confirmpassword} onChange={handleChange} />
          <SubmitBtn>가입하기</SubmitBtn>
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
