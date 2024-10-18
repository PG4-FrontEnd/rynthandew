import React, { useState } from 'react';
import styled from 'styled-components';
import CustomInput from '../components/CustomInput.tsx';
import Title from '../components/Title.tsx';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
`;

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 600px;
  margin: 0 auto;
  border-radius: 10px;
`;

const InnerContainer = styled.div``;

const JoinLinkDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const LoginButton = styled.button`
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: white;
  background-color: #1e222c;
  border-radius: 8px;
  border: none;
  outline: none;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 10px;
`;

export default function Join() {
  const [errors, setErrors] = useState('');
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    // api 연결
    // 에러 표시 로직
    setErrors('어쩌고 저쩌고');
  };
  return (
    <Background>
      <Container>
        <InnerContainer>
          <Title title="회원가입" fontSize={34} />
          <JoinLinkDiv />
          <Form onSubmit={handleSubmit}>
            <CustomInput
              width={300}
              type="text"
              placeholder="your@email"
              label="아이디"
              error={errors}
            />
            <CustomInput
              width={300}
              type="text"
              placeholder="홍길동"
              label="이름"
              error={errors}
            />
            <CustomInput
              width={300}
              type="password"
              placeholder="your password"
              label="비밀번호"
              error={errors}
            />
            <CustomInput
              width={300}
              type="password"
              placeholder="confirm password"
              label="비밀번호 재확인"
              error={errors}
            />
            <LoginButton>회원가입</LoginButton>
          </Form>
        </InnerContainer>
      </Container>
    </Background>
  );
}
