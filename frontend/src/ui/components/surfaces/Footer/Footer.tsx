import React from 'react';
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
  return (
      <FooterStyled>
        <FooterContainer>
          <Box sx={{ maxWidth: '400px' }}>
            <FooterTitle>Quem Somos</FooterTitle>
            <Typography variant={'body2'} sx={{mt: 2}}>
              Somos o DevFreela plataforma especializada que conecta desenvolvedores selecionados e qualificados 
              com projetos de empresas por todo o Brasil. Venha ser DevFreela e fique livre do pagamento de comissões.
            </Typography>
          </Box>
          <div>
            <FooterTitle>Baixe nosso aplicativo</FooterTitle>
            <AppList>
              <li>
                <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                  <img src="/img/logos/app-store.png" alt="App Store" />
                </a>
              </li>
              <li>
                <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                  <img src="/img/logos/google-play.png" alt="Google Pay" />
                </a>
              </li>
            </AppList>
          </div>
          
        </FooterContainer>
      </FooterStyled>
    );
}

export default Footer;