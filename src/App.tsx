import React from 'react';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Board from './views/Board.tsx';
import Bulletin from './views/Bulletin.tsx';
import Home from './views/Home.tsx';
import Join from './views/Join.tsx';
import Login from './views/Login.tsx';
import Notification from './views/Notification.tsx';
import Setting from './views/Setting.tsx';
import Writing from './views/Writing.tsx';
import { svgSpriteSheet } from './utils/SvgSprite.tsx';
import CustomInput from './components/CustomInput.tsx';

const GlobalStyle = createGlobalStyle`
  :root {
    --selected: #EDF4Fb;
    --main: #0086CB;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      {svgSpriteSheet}
      <BrowserRouter>
        <Layout>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="40" height="40" aria-hidden="true">
              <use xlinkHref="#_logoIpsum" />
            </svg>
          </Link>

          {/* CustomInput 사용 부분 추가 */}
          <CustomInput
            width={300}
            height={42}
            placeholder="제목 + 내용"
            label="검색"
            iconLeft="search" // 아이콘을 설정합니다.
            error="" // 에러 메시지가 필요할 경우 작성하세요.
            required // required 속성을 추가했습니다.
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/board" element={<Board />} />
            <Route path="/bulletin" element={<Bulletin />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/bulletin/writing" element={<Writing />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
