import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 20px;
  font-family: Arial, sans-serif;
  background: #f0f0f0; /* Set the same background color as CounterPage */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <p>The page you're looking for does not exist.</p>
      <Button onClick={() => window.location.href = '/'}>Go Back Home</Button>
    </Container>
  );
};

export default NotFound;
