import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";

function PostCard() {
  return (
    <Block>
      <CardTitle>League title</CardTitle>
      <CardImage>image</CardImage>
      <CardState>State</CardState>
    </Block>
  );
}

const Block = styled.div`
  height: 10rem;
  width: 19%;

  ${mediaQuery(866)} {
    width: 165px;
  }

  background: white;
  border: 1px solid black;
  margin: 1rem;
  padding: 0.5rem;
`;

const CardTitle = styled.div`
  margin-bottom: 0.5rem;
`;
const CardImage = styled.div`
  height: 30%;
  border: 1px solid black;
  margin-bottom: 0.5rem;
`;
const CardState = styled.div``;

export default PostCard;
