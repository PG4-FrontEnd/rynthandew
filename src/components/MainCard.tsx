import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  leader: string;
  createdAt: string;
  imageUrl: string;
}

const CardContainer = styled.div`
  width: 220px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const CardContent = styled.div`
  padding: 16px;
  height: 125px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 10px;
  color: #1976d2;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 10px;
`;

const MainCard: React.FC<CardProps> = ({
  title,
  leader,
  createdAt,
  imageUrl,
}) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={imageUrl} alt={title} />
      </CardImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{leader}</CardDescription>
        <CardDescription>{createdAt}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default MainCard;
