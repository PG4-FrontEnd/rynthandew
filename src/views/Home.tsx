import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainCard from '../components/MainCard.tsx';
import CustomInput from '../components/CustomInput.tsx';
import { ICON, Icon } from '../utils/SvgSprite.tsx';
import Modal from '../components/backdrop/Modal.tsx';
import Layout from '../components/Layout.tsx';
import PageHeader from '../components/pageHeader/PageHeader.tsx';

interface ProjectProps {
  id: number;
  title: string;
  leader: string;
  createdAt: string;
  imageUrl?: string;
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const EmptyDiv = styled.div`
  width: 1px;
  height: 20px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 260px);
  gap: 20px;
  margin-top: 20px;
`;

const AddProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 300px;
  background-color: #fff;
  border: 1px dashed #ccc;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e9ecee;
  }

  span {
    margin-top: 20px;
  }
`;

export default function Home() {
  const [projects, setProjects] = useState<ProjectProps[]>([
    {
      id: 1,
      title: '이슬보다린',
      leader: '리더',
      createdAt: '생성일: 2024-10-18',
      imageUrl: 'https://github.com/github.png',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddProject = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveProject = (title: string, leader: string) => {
    const today = new Date().toISOString().split('T')[0];
    const newProject: ProjectProps = {
      id: 100 + Math.floor(Math.random() * 10),
      title,
      leader,
      createdAt: today,
      imageUrl: 'https://github.com/github.png',
    };

    setProjects([...projects, newProject]);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <HomeContainer>
        <PageHeader title="프로젝트" />
        <EmptyDiv />
        <CustomInput
          width={220}
          height={32}
          fontSize={14}
          type="search"
          placeholder="제목 + 내용"
          iconLeft="search"
        />

        <ProjectGrid>
          {projects.map(project => (
            <Link to={`board/${project.id}`}>
              <MainCard
                key={project.id}
                title={project.title}
                leader={project.leader}
                createdAt={project.createdAt}
                imageUrl={project.imageUrl}
              />
            </Link>
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
    </Layout>
  );
}
