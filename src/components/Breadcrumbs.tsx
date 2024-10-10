import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 8px;
`;

// 게시판에 글 조회 시 수정 필요
const validPathname = (pathname: string) => {
  if (pathname === '') return '홈';
  if (pathname === 'board') return '보드';
  if (pathname === 'setting') return '설정';
  if (pathname === 'writing') return '글쓰기';
  if (pathname === 'bulletin') return '게시판';
  if (pathname === 'writing') return '게시판';
  return '특수처리';
};

const Separator = styled.span`
  margin: 0 5px;
`;

const Breadcrumb = styled.span<{ $isLast?: boolean }>`
  font-size: 14px;
  color: ${({ $isLast }) => ($isLast ? 'black' : 'rgba(0, 0, 0, 0.6)')};
`;

const BreadcrumbLink = styled(Link)<{ $isLast?: boolean }>`
  cursor: pointer;
  font-size: 14px;
  color: ${({ $isLast }) => ($isLast ? 'black' : 'rgba(0, 0, 0, 0.6)')};
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export default function Breadcrumbs() {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split('/');
  let url = 'http://localhost:3000';

  return (
    <BreadcrumbsContainer>
      {pathname === '/' ? (
        <BreadcrumbLink to="/" $isLast>
          홈
        </BreadcrumbLink>
      ) : (
        segments.map((segment: string, index: number) => {
          const result = validPathname(segment);
          if (index > 0) {
            url += `/${segment}`;
          }
          const isLast = index === segments.length - 1;

          return (
            <React.Fragment key={url}>
              {index !== 0 && <Separator> / </Separator>}
              {result !== '특수처리' ? (
                <BreadcrumbLink to={url} $isLast={isLast}>
                  {result}
                </BreadcrumbLink>
              ) : (
                <Breadcrumb $isLast={isLast}>{result}</Breadcrumb>
              )}
            </React.Fragment>
          );
        })
      )}
    </BreadcrumbsContainer>
  );
}
