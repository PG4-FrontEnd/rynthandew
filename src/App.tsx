import React from 'react';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './views/Board.tsx';
import Bulletin from './views/Bulletin.tsx';
import Home from './views/Home.tsx';
import Join from './views/Join.tsx';
import Login from './views/Login.tsx';
import Notification from './views/Notification.tsx';
import Setting from './views/Setting.tsx';
import Writing from './views/Writing.tsx';
import { svgSpriteSheet } from './utils/SvgSprite.tsx';

const GlobalStyle = createGlobalStyle`
  :root {
    --selected: #EDF4Fb;
    --main: #0086CB;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration : none;
    color : inherit;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      {svgSpriteSheet}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/bulletin" element={<Bulletin />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/setting/:id" element={<Setting />} />
          <Route path="/bulletin/writing" element={<Writing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
