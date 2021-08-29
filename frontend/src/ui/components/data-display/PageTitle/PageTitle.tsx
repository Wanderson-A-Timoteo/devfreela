import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './PageTitle.style';

interface PageTitleprops {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleprops> = ( props ) => {
  return (
    <PageTitleContainer>
    <PageTitleStyled> {props.title} </PageTitleStyled>
    <PageSubtitleStyled> {props.subtitle} </PageSubtitleStyled>
    </PageTitleContainer>
  );
}

export default PageTitle;