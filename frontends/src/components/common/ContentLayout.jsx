import React from "react";
import styled from "styled-components";

function ContentLayout({ content }) {
  return (
    <Block>
      <Main>{content}</Main>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Main = styled.main`
  flex: 1;
`;

export default ContentLayout;
