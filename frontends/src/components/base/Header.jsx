import React from "react";
import styled from "styled-components";

import HeaderLogo from "./HeaderLogo";
import HeaderTab from "./HeaderTab";
import HeaderMyTab from "./HeaderMyTab";

function Header() {
  return (
    <Block>
      <Inner>
        <Left>
          <HeaderLogo>Logo</HeaderLogo>
          <HeaderTab />
        </Left>
        <Right>
          <HeaderMyTab />
          <HeaderLogMenu>LogMenu</HeaderLogMenu>
        </Right>
      </Inner>
    </Block>
  );
}

const Block = styled.div`
  padding: 1rem 2rem;
  background-color: green;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  background-color: red;
  align-content: center;
`;

const Right = styled.div`
  display: flex;
  background-color: red;
`;

const HeaderLogMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Header;
