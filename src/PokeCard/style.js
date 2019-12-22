import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 2;
  margin: 0.1rem;
  border-radius: 10px;
  width: 18rem;
  min-height: 4rem;
  height: 4rem;
  background-color: white;
  font-weight: 600;
  font-size: 1.4rem;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);
`;

export const LeftCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px 0px 10px;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);
  width: 65px;
  height: 100%;
  background: #ccc;
  z-index: 3;
`;

export const RightCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 10px 10px 0px;
  width: calc(100% - 65px);
  height: 100%;
  color: black;
  background: white;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50%;
  width: 100%;
`;

export const LocalNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border-radius: 0px 0px 10px 0px;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);
  width: 4rem;
`;

export const Type = styled.img`
  width: 4.2rem;
  height: 1.5rem;
  margin: 0.25rem;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 0.5rem;
  width: calc(100% - 4rem);
`;

export const DraggableWrapper = styled.div`
  /* just to size it to content */
  display: inline-block;
  /* opaque background is important for performance */
  background: transparent;
  /* avoid selecting text while dragging */
  user-select: none;
  z-index: 3;
`;