import React, { useState } from 'react';
import styled from 'styled-components';
import CustomInput from '../components/CustomInput.tsx';
import { ICON, Icon } from '../utils/SvgSprite.tsx';
// import Dropdown from '../components/dropdown.tsx';
import BorderlessInput from '../components/BorderlessInput.tsx';
import PageHeader from '../components/pageHeader/PageHeader.tsx';

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 80px; // 상단 여백 추가
`;

const SearchBar = styled.div`
  margin-bottom: 20px;
  margin-top: 20px; // 검색바 상단 여백 추가
`;

const SettingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px; // 설정 섹션 상단 여백 추가
`;

const SettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px; // 패딩 증가
  background-color: #f5f5f5;
  border-radius: 8px; // 모서리 둥글기 증가
  margin-bottom: 10px; // 아이템 간 간격 추가
`;

const SettingItemLeft = styled.div`
  flex: 1;
`;

const SettingItemTitle = styled.span`
  font-weight: bold;
  font-size: 16px; // 글자 크기 증가
  margin-bottom: 5px; // 제목과 값 사이 간격 추가
`;

const SettingItemRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px; // 간격 증가
`;

const SettingItemCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px; // 간격 조정
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 15px; // 버튼 크기 증가
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Switch = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 50px;
  height: 26px;
  background-color: #ccc;
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:checked {
    background-color: #4caf50;
  }

  &::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: white;
    transition: transform 0.3s;
  }

  &:checked::before {
    transform: translateX(24px);
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: color 0.3s;

  &:hover {
    color: #ff4d4d;
  }
`;

export default function Setting() {
  const [showTimeChange, setShowTimeChange] = useState(false);

  const toggleTimeChange = () => {
    setShowTimeChange(!showTimeChange);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 설정 저장 로직
  };

  return (
    <SettingContainer>
      <PageHeader title="설정" onSubmit={handleSubmit} />
      <SearchBar>
        <CustomInput
          width={300}
          type="text"
          placeholder="Search..."
          iconLeft={ICON.SEARCH}
        />
      </SearchBar>

      <SettingSection>
        <SettingItem>
          <SettingItemLeft>
            <SettingItemTitle>깃허브 저장소</SettingItemTitle>
          </SettingItemLeft>
        </SettingItem>

        <SettingItem>
          <SettingItemLeft>
            <SettingItemTitle>URL</SettingItemTitle>
          </SettingItemLeft>
          <SettingItemCenter>
            <BorderlessInput
              initialText="https://github.com/dongguJeong"
              fontSize={14}
            />
          </SettingItemCenter>
          <SettingItemRight>
            <DeleteButton>
              <Icon icon={ICON.CANCLE} size="24" />
            </DeleteButton>
          </SettingItemRight>
        </SettingItem>

        <SettingItem>
          <SettingItemLeft>
            <SettingItemTitle>알림 설정</SettingItemTitle>
          </SettingItemLeft>
          <SettingItemCenter>
            <SettingItemTitle>내용</SettingItemTitle>
          </SettingItemCenter>
          <AddButton>추가</AddButton>
        </SettingItem>

        <SettingItem>
          <SettingItemLeft>
            <SettingItemTitle onClick={toggleTimeChange}>
              매일 오전 10시 00분
            </SettingItemTitle>
          </SettingItemLeft>
          <SettingItemCenter>
            <SettingItemTitle>입력 칸...</SettingItemTitle>
          </SettingItemCenter>
          <SettingItemRight>
            <Switch />
            <DeleteButton>
              <Icon icon={ICON.CANCLE} size="24" />
            </DeleteButton>
          </SettingItemRight>
        </SettingItem>
      </SettingSection>
    </SettingContainer>
  );
}
