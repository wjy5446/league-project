import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../../static/svg";

function HeaderLogo() {
  return (
    <Block>
      <Link to="/">
        <Logo witdth={50} height={50} />
      </Link>
    </Block>
  );
}

const Block = styled.div`
  margin-right: 2rem;
`;

export default HeaderLogo;
