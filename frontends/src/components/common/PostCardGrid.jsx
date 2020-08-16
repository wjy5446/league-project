import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";

function PostCardGrid({ children }) {
  return <Block>{children}</Block>;
}

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mediaQuery(767)} {
    margin: 0;
  }
`;

export default PostCardGrid;
