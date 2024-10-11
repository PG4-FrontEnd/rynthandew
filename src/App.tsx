import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home.tsx';
import Board from './views/Board.tsx';
import Bulletin from './views/Bulletin.tsx';
import Join from './views/Join.tsx';
import Login from './views/Login.tsx';
import Notification from './views/Notification.tsx';
import Setting from './views/Setting.tsx';
import Writing from './views/Writing.tsx';
import { svgSpriteSheet } from './utils/SvgSprite.tsx';

const GlobalStyle = createGlobalStyle`
  :root{
    --selected : #EDF4Fb ;
    --main : #0086CB;
  }
  body{
    font-family : 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      {svgSpriteSheet}
      <BrowserRouter>
        <Routes>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/setting" element={<Setting />} />
          <Route path="/bulletin" element={<Bulletin />} />
          <Route path="/bulletin/Writing" element={<Writing />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
