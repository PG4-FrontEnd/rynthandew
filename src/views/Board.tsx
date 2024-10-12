import React from 'react';
import CustomInput from '../components/CustomInput.tsx';
import BoardCard from '../components/BoardCard.tsx';

export default function Board() {
  return (
    <div>
      <CustomInput width={220} type="text" placeholder="아이디" />
      <BoardCard title="풀스택 개발자로 거듭나기" />
      Board
    </div>
  );
}
