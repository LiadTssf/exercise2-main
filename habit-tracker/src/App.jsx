import React from 'react';
import HabitTracker from './HabitTracker';
import styled from 'styled-components';
import Login from"./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<BrowserRouter>
  <AppContainer>  
    <Routes>
     <Route path="/MainPage" element={<HabitTracker/>} />   
     <Route path="/" element={<Login/>} />   
    </Routes>  
    </AppContainer>
</BrowserRouter>

    
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif,semibold;
`;