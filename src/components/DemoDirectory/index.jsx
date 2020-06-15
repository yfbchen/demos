import React from 'react';

import DemoDirectoryItem from '../../components/DemoDirectoryItem';

import { StyledDemoDirectory } from './styles';

const DemoDirectory = () => (
  <StyledDemoDirectory>
    <DemoDirectoryItem>Calculator</DemoDirectoryItem>
  </StyledDemoDirectory>
);

export default DemoDirectory;
