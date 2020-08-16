import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { mediaQuery } from "../../lib/styles/media";

function HomeSearch() {
  return (
    <Block>
      <Search>
        <SearchInput>
          <SearchLogo style={{ fontSize: 20 }} />
          <SearchField type="text" />
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
  border: 1px solid black;
  padding: 1rem 2rem;
`;

const SearchFilter = styled.div`
  border: 1px solid black;
  height: 2rem;
  margin-top: 1.5rem;
`;

const SearchLogo = styled(MdSearch)`
  border: 1px solid black;
  border-radius: 1.5rem;
  padding: 0.5rem;
`;

const SearchField = styled.input`
  height: 100%;
  width: 80%;
  margin-left: 1rem;
  border: 1px solid black;
  flex: 1;
  font-size: 2rem;
`;

export default HomeSearch;
