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
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

const CardContent = styled.div`
  padding: 16px;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 10px;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 5px;
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
