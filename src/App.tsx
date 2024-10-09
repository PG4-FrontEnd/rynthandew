import { Reset } from 'styled-reset';
import React from 'react';
import { CustomInput } from './components/customInput/CustomInput.tsx';

function App() {
  return (
    <div className="App">
      <Reset />
      <CustomInput
        width={220}
        placeholder="아이디"
        type="text"
        iconLeft="search"
      />
    </div>
  );
}

export default App;
