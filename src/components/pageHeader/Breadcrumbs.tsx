import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';

interface PathMap {
  [key: string]: string;
}

interface UrlBuilderMap {
  [key: string]: (baseUrl: string, id?: string) => string;
}

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

const PATH_MAP: PathMap = {
  '': '홈',
  board: '보드',
  setting: '설정',
  writing: '글쓰기',
  bulletin: '게시판',
  notification: '수신함',
};

const URL_BUILDER: UrlBuilderMap = {
  board: (baseUrl, id) => `${baseUrl}/board/${id}`,
  setting: (baseUrl, id) => `${baseUrl}/setting/${id}`,
  '': baseUrl => baseUrl,
  notification: baseUrl => `${baseUrl}/notification`,
};

const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

const BreadcrumbLink = styled(Link)<{ $isLast: boolean }>`
  cursor: pointer;
  font-size: 14px;
  color: ${({ $isLast }) => ($isLast ? 'black' : 'rgba(0, 0, 0, 0.6)')};
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

const getPathName = (segment: string): string => PATH_MAP[segment] || segment;

const buildUrl = (segment: string, baseUrl: string, id?: string): string => {
  const builder = URL_BUILDER[segment];
  return builder ? builder(baseUrl, id) : '';
};

export default function Breadcrumbs() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const segments = pathname.split('/');
  let keyId = 0;
  if (pathname === '/') {
    return (
      <BreadcrumbsContainer>
        <BreadcrumbLink to="/" $isLast>
          홈
        </BreadcrumbLink>
      </BreadcrumbsContainer>
    );
  }

  let lastIndex: number;
  if (segments[segments.length - 1] === id) {
    lastIndex = segments.length - 2;
  } else {
    lastIndex = segments.length - 1;
  }

  return (
    <BreadcrumbsContainer>
      {segments.map((segment, index) => {
        const isLast = index === lastIndex;
        const pathName = getPathName(segment);
        const url = buildUrl(segment, BASE_URL, id);
        keyId += 1;
        if (pathName === id) {
          return <div />;
        }

        return (
          <React.Fragment key={`${pathName}-${keyId}`}>
            {index > 0 && <Separator>/</Separator>}
            <BreadcrumbLink to={url} $isLast={isLast}>
              {pathName}
            </BreadcrumbLink>
          </React.Fragment>
        );
      })}
    </BreadcrumbsContainer>
  );
}
