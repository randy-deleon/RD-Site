import React from 'react';
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: 60px 2fr 70px;
  grid-gap: 15px;
  height: 100%;
`;

export default ({ children }) => (
  <GridContainer>{children}</GridContainer>
)