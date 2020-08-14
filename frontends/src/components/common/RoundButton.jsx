import React from "react";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../lib/styles/media";

function RoundButton({ to, size, children }) {
  return <RoundButtonBlock size={size}>{children}</RoundButtonBlock>;
}

const RoundButtonBlock = styled.button`
  ${(props) =>
    props.size === "SMALL" &&
    css`
      height: 1.5rem;
      padding: 0.3rem 0.75rem;
      font-size: 0.875rem;
      border-radius: 0.75rem;
    `};
  ${(props) =>
    props.size === "DEFAULT" &&
    css`
      padding: 0.3rem 1rem;
      font-size: 1rem;
      border-radius: 1rem;
    `};
  ${(props) =>
    props.size === "LARGE" &&
    css`
      height: 3rem;
      padding: 0.3rem 2rem;
      font-size: 1.5rem;
      border-radius: 1.5rem;
    `};

  background: black;
  color: white;
  outline: none;
  word-break: keep-all;
  &:hover {
    background: gray;
  }

  transition: 0.123s all ease-in;
  &:focus {
    box-shodow: 0px 2px 12px #00000030;
  }

  cursor: pointer;
`;

export default RoundButton;
