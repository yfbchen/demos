import React from 'react';

import { ReactComponent as Logo } from '../../logo.svg';

import {
  StyledHeaderContainer,
  StyledLogoContainer,
  StyledMenuContainer,
  StyledMenuLink,
} from './styles';

const Header = () => (
  <StyledHeaderContainer>
    <StyledLogoContainer>
      <Logo />
    </StyledLogoContainer>
    <StyledMenuContainer>
      <StyledMenuLink to="/">Home</StyledMenuLink>
      <StyledMenuLink to="/demos">Demos</StyledMenuLink>
    </StyledMenuContainer>
  </StyledHeaderContainer>
);

export default Header;
