import React from "react";

import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 10rem;
  height: fit-content;
  font-size: 2rem;
  color: #f6e7d8;
`;

const Span = styled.span`
  color: #116530;
  font-size: 4rem;
`;

function Logo() {
  return (
    <LogoContainer>
      <Span>[</Span>
      GODS
      <Span>]</Span>
    </LogoContainer>
  );
}

export default Logo;
