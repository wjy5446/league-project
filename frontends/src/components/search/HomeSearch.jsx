import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

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
  background-color: yellow;
  padding: 2rem;
`;

const Search = styled.div`
  padding: 1rem 10rem;
`;

const SearchInput = styled.div`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 1rem 3rem;
`;

const SearchFilter = styled.div`
  border: 1px solid black;
  height: 2rem;
  margin-top: 1.5rem;
`;

const SearchLogo = styled(MdSearch)`
  margin-right: 3rem;
  border: 1px solid black;
  border-radius: 1.5rem;
  padding: 0.5rem;
`;

const SearchField = styled.input`
  height: 100%;
  border: 1px solid black;
  flex: 1;
  font-size: 2rem;
`;

export default HomeSearch;
