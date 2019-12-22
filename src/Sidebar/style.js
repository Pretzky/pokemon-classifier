import styled from 'styled-components';

export const WrapperWithFilters = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 1.4rem;
  width: 20rem;
  height: 100vh;
  color: white;
  background: #333;
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 4%;
  width: 90%;
  margin: 5% 0;
`;

export const SearchBar = styled.input`
  width: 70%;
  height: 60%;
  padding: 0 0.5rem;
  border-radius: 10px;

  &:focus {
    outline: none;
    border: 2px solid #ddd;
  }
`;

export const FilterButton = styled.button`
  width: 15%;
  height: calc(60% + 4px);
  margin: 0 0 0 12%;
  background: white;
  border: 1px solid #777;
  border-radius: 10px;

  &:focus {
    outline: none;
    border: 1px solid #ddd;
  }
`;

export const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99%;
  height: 90%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.334rem;
    height: 0.334rem;
    background-color: #333;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: #333;
  }
`;