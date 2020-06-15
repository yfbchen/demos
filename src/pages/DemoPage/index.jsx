import React from 'react';

import DemoDirectory from '../../components/DemoDirectory';

import { StyledDemoPageContainer, StyledDescriptonContainer } from './styles';

const DemoPage = () => (
  <StyledDemoPageContainer>
    <StyledDescriptonContainer>
      Check out my recent projects:
    </StyledDescriptonContainer>
    <DemoDirectory />
  </StyledDemoPageContainer>
);

export default DemoPage;
