import React from "react";
import styled from "styled-components";

import HeaderLogo from "./HeaderLogo";
import HeaderTab from "./HeaderTab";
import HeaderMyTab from "./HeaderMyTab";
import RoundButton from "../common/RoundButton";

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
          <RoundButton size="DEFAULT">Log in</RoundButton>
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
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  background-color: red;
  align-items: center;
`;

export default Header;
