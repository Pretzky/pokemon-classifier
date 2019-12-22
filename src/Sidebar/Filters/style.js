import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 1.4rem;
  height: auto;
  max-height: 20rem;
  width: 20rem;
  color: white;
  background: #666;
`;

export const TypesHeader = styled.div`
  margin: 1rem 0 0.5rem 0;
`;

export const TypesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
`;

export const Type = styled.img`
  width: 4.2rem;
  height: 1.5rem;
  margin: 0.25rem;

  background-color: ${props => (props.selected ? 'white' : '#666')};
  border-radius: 5px;
`;

export const FilterButton = styled.button`
  min-height: 2rem;
  min-width: 8rem;
  font-weight: 600;
  font-size: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background: white;
  border: 1px solid #999;
  text-transform: uppercase;
  color: black;
  text-decoration: none;

  &:focus {
    outline: none;
    border: 1px solid #111;
  }

  &:hover {
    outline: none;
    border: 1px solid #444;
  }
`;