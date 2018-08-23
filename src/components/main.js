import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
  grid-area: main;
  margin: 0 15px;
`;

export default ({ children }) => (
  <Main>{children}</Main>
)