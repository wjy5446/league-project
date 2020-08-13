import React from "react";
import styled from "styled-components";
import { MdFlag, MdGroup } from "react-icons/md";
import { NavLink } from "react-router-dom";

function HeaderTab() {
  return (
    <Block>
      <NavLink to="/league" activeClassName="active" exact>
        <MdFlag />
        League
      </NavLink>
      <NavLink to="/team" activeClassName="active" exact>
        <MdGroup />
        Team
      </NavLink>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    algin-items: center;
    font-size: 1rem;
    text-decoration: none;
    margin-right: 2rem;

    svg {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }

    &.active {
      font-weight: bold;
    }
  }
`;

export default HeaderTab;
