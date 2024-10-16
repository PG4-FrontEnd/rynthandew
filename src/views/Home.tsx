import React, { useState } from 'react';
import styled from 'styled-components';
import MainCard from '../components/MainCard.tsx';
import CustomInput from '../components/CustomInput.tsx';
import { ICON, Icon } from '../utils/SvgSprite.tsx';
import Title from '../components/Title.tsx';
import Modal from '../components/backdrop/Modal.tsx';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const TopSpace = styled.div`
  height: 90px;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column; // 두 줄로 표시하기 위해 방향 변경
  gap: 8px; // 간격 조정
  margin-bottom: 16px;
`;

const SearchBar = styled.div`
  margin-bottom: 20px;
`;

const ProjectGridWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(220px, 1fr)
  ); // 카드 크기 조정
  gap: 8px; // 간격 조정
`;

const AddProjectCardWrapper = styled.div`
  width: 200px; // 카드 크기 조정
`;

const AddProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 250px; // 카드 크기 조정
  background-color: #fff;
  border: 1px dashed #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Home() {
  const [projects, setProjects] = useState([
    {
      id: '1',
      title: '프론트엔드 프로젝트',
      leader: '팀장명',
      createdAt: '생성일: 2024-10-10',
      imageUrl: 'https://github.com/github.png',
    },
    // 더 많은 프로젝트를 추가하여 스크롤 테스트를 할 수 있습니다.
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProject = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProject = (url: string, description: string) => {
    const newProject = {
      id: String(projects.length + 1),
      title: description,
      leader: 'New Leader',
      createdAt: `생성일: ${new Date().toISOString().split('T')[0]}`,
      imageUrl: 'https://github.com/github.png', // 임시 이미지 URL
    };
    setProjects([...projects, newProject]);
  };

  return (
    <HomeContainer>
      <TopSpace />
      <ContentSection>
        <NavSection>
          <Title title="홈" fontSize={16} />
          <Title title="프로젝트" fontSize={16} />
        </NavSection>
        <SearchBar>
          <CustomInput
            width={200}
            type="text"
            placeholder="Search..."
            iconLeft={ICON.SEARCH}
          />
        </SearchBar>
        <ProjectGridWrapper>
          <ProjectGrid>
            {projects.map(project => (
              <MainCard
                key={project.id}
                title={project.title}
                leader={project.leader}
                createdAt={project.createdAt}
                imageUrl={project.imageUrl}
              />
            ))}
            <AddProjectCardWrapper>
              <AddProjectCard onClick={handleAddProject}>
                <Icon icon={ICON.ADD} size="48" />
                <span>새 프로젝트 추가하기</span>
              </AddProjectCard>
            </AddProjectCardWrapper>
          </ProjectGrid>
        </ProjectGridWrapper>
      </ContentSection>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProject}
      />
    </HomeContainer>
  );
}
