import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { mediaQuery } from "../../lib/styles/media";

function HomeSearch() {
  return (
    <Block>
      <Search>
        <SearchInput>
          <SearchLogo style={{ fontSize: 40 }} />
          <SearchField type="text" placeholder="My First League" />
        </SearchInput>
        <SearchFilter />
      </Search>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Search = styled.div`
  ${mediaQuery(2000)} {
    width: calc(1000px - 1rem);
  }
  ${mediaQuery(1000)} {
    width: calc(100% - 1rem);
  }
`;

const SearchInput = styled.div`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;

const SearchFilter = styled.div`
  height: 2rem;
  margin-top: 1.5rem;
  border-radius: 0.2rem;
  background-color: #e2e3f0;
`;

const SearchLogo = styled(MdSearch)`
  padding: 0.5rem;
  cursor: pointer;
`;

const SearchField = styled.input`
  height: 100%;
  width: 80%;
  margin-left: 1rem;
  flex: 1;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default HomeSearch;
