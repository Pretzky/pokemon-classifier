import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: ${props => (props.expanded ? '40rem' : '9rem')};
  position: absolute;
  bottom: 0;
  left: 20rem;
  background-color: #333;
  box-shadow: 0px 0px 20px -10px rgb(0, 0, 0);
  border-radius: 0 10px 0 0;
  padding: 0.5rem;
  z-index: 1;
  font-weight: 600;
  font-size: 1.4rem;
  color: white;
`;

export const ConstantDisplay = styled.div`
  display: flex;
  flex-direction: row;
  width: 49rem;
  height: 8rem;
`;

export const TrainingDisplay = styled.div`
  display: flex;
  flex-direction: row;
  width: 49rem;
  height: 31rem;
`;

export const TrainingDisplayRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
`;

export const MiddleArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  padding: 0 0.5rem;
`;

export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 100%;
`;

export const EvoGroupArea = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
`;

export const SelectedMonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem 0 1rem;
  border-radius: 10px;
  width: 18.2rem;
  min-height: 4.2rem;
  color: black;
  background-color: ${props => (props.monSelected ? '' : '#ccc')};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TrainButton = styled.button`
  min-height: 2rem;
  min-width: 8rem;
  font-weight: 600;
  font-size: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background: white;
  border: 1px solid #999;
  color: black;
  text-decoration: none;
  width: 8rem;

  &:focus {
    outline: none;
    border: 1px solid #333;
  }

  &:hover {
    outline: none;
    border: 1px solid #fff;
  }
`;