import React from 'react';
import styled from 'styled-components';
import { ICON, Icon } from '../../utils/SvgSprite.tsx';

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: white;
  border-right: 1px solid #d0d0d0;
  padding-top: 70px; // Header의 높이만큼 여백 추가
`;

const MenuText = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  padding-left: 20px;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ItemText = styled.span`
  margin-left: 10px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <MenuText>메뉴</MenuText>
      <SidebarItem>
        <Icon icon={ICON.BOARD} size="24" />
        <ItemText>보드</ItemText>
      </SidebarItem>
      <SidebarItem>
        <Icon icon={ICON.BULLETIN} size="24" />
        <ItemText>게시판</ItemText>
      </SidebarItem>
    </SidebarContainer>
  );
}

export default Sidebar;
