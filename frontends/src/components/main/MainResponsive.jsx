import React from "react";
import styled from "styled-components";

import { mediaQuery } from "../../lib/styles/media";

function MainResponsive({ className, children }) {
  return <Block className={className}>{children}</Block>;
}

const Block = styled.div`
  background-color: blue;

  width: 1728px;
  margin-left: auto;
  margin-right: auto;

  ${mediaQuery(1919)} {
    width: 1376px;
  }
  ${mediaQuery(1440)} {
    width: 1280px;
  }
  ${mediaQuery(1312)} {
    width: calc(100% - 2rem);
  }
  ${mediaQuery(944)} {
    width: calc(100% - 2rem);
  }
  ${mediaQuery(767)} {
    width: calc(100% - 2rem);
  }
`;

export default MainResponsive;
