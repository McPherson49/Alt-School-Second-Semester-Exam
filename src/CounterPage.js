import React from 'react';
import useCounter from './useCounter';
import ErrorBoundaryTest from './ErrorBoundaryTest';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 20px;
  font-family: Arial, sans-serif;
  background: #f0f0f0; /* Set your background color or image here */
  min-height: 100vh; /* Ensure the container takes up the full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const Count = styled.p`
  font-size: 36px;
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

const CounterPage = () => {
  const counter = useCounter(0);

  return (
    <ErrorBoundaryTest>
      <Container>
        <Title>Custom Counter Hook </Title>
        <Count>Count: {counter.count}</Count>
        <Button onClick={counter.increment}>Increment</Button>
        <Button onClick={counter.decrement}>Decrement</Button>
        <Button onClick={counter.reset}>Reset</Button>
        <Button onClick={() => counter.setValue(10)}>Set to 10</Button>
      </Container>
    </ErrorBoundaryTest>
  );
};

export default CounterPage;
