import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainCard from '../components/MainCard.tsx';
import CustomInput from '../components/CustomInput.tsx';
import { ICON, Icon } from '../utils/SvgSprite.tsx';
import Modal from '../components/backdrop/Modal.tsx';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const AddProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: #fff;
  border: 1px dashed #ccc;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SettingsIcon = styled.div`
  cursor: pointer;
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
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddProject = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSettingsClick = () => navigate('/setting');

  const handleSaveProject = (url: string, description: string) => {
    const newProject = {
      id: String(projects.length + 1),
      title: description,
      leader: 'New Leader',
      createdAt: `생성일: ${new Date().toISOString().split('T')[0]}`,
      imageUrl: 'https://github.com/github.png',
    };
    setProjects([...projects, newProject]);
    setIsModalOpen(false);
  };

  return (
    <HomeContainer>
      <TopSection>
        <Title>프로젝트</Title>
        <SearchWrapper>
          <CustomInput
            width={220}
            height={32}
            fontSize={14}
            type="search"
            placeholder="제목 + 내용"
          />
        </SearchWrapper>
        <SettingsIcon onClick={handleSettingsClick}>
          <Icon icon={ICON.SETTING} size="24" />
        </SettingsIcon>
      </TopSection>
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
        <AddProjectCard onClick={handleAddProject}>
          <Icon icon={ICON.ADD} size="48" />
          <span>새 프로젝트 추가하기</span>
        </AddProjectCard>
      </ProjectGrid>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProject}
      />
    </HomeContainer>
  );
}
