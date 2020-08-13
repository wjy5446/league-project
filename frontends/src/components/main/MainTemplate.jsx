import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <Block>{children}</Block>
    </>
  );
}

const GlobalStyle = createGlobalStyle``;

const Block = styled.div``;

export default MainTemplate;
