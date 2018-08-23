import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import Logo from './logo'

const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 124px;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo navigation';
  grid-gap: 15px;
  padding: 15px 0 15px 5px;
  background-color:#e54b4b;
  height:60px;
`;
const Navigation = styled.nav`
  grid-area: navigation;
  display: grid;
  grid-template-row: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
`
const WhiteLink = styled(Link)`
  color:#fff;
  text-decoration:none;
  &:hover ${WhiteLink}{
    color:#F5F5F4;
    text-decoration:underline;
  }
`

export default () => (
  <Header>
    <Logo />
    <Navigation role='navigation'>
    <WhiteLink className='button-link' to='/'>Home</WhiteLink>
    <WhiteLink className='button-link' to='/blog/'>Blog</WhiteLink>
  </Navigation>
  </Header>
);