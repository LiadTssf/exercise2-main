import React from 'react';
import HabitTracker from './HabitTracker';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <HabitTracker />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;