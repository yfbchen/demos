import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  margin-bottom: 25px;
`;

export const StyledLogoContainer = styled(Link)`
  height: 100%;
  width: 200px;
`;

export const StyledMenuContainer = styled('div')`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledMenuLink = styled(Link)`
  padding: 10px 40px;
  cursor: pointer;
  font-weight: 500;
`;
