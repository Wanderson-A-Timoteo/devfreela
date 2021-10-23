import React from 'react';
import { HeaderAppBar, HeaderLogo } from './Header.style';
import { Toolbar, Container } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={'sticky'}>
      <Toolbar component={Container}>
        <HeaderLogo src={'/img/logos/devFreela.png'} alt={'devFreela'} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;