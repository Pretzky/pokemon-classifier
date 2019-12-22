import styled from 'styled-components';

export const PokePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 0;
  left: 21rem;
  top: 1rem;
  margin: 0.1rem;
  border-radius: 10px;
  width: calc(100vw - 22.5rem);
  height: calc(100vh - 2.5rem);
  /* background-color: white; */
  font-weight: 600;
  font-size: 1.4rem;
  /* box-shadow: 0px 0px 4px 0px rgba(0,0,0,1); */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 33rem;
  height: calc(100vh - 2.5rem);
`;

export const MonImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  border-radius: 10px;
  width: 31rem;
  height: 15.5rem;
  background-color: #ccc;
  font-weight: 600;
  font-size: 1.4rem;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);
`;

export const MonMainInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
  padding-right: 0.5rem;
  border-radius: 10px;
  width: 30.5rem;
  height: 3rem;
  background-color: white;
  font-weight: 600;
  font-size: 1.4rem;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);

  span:first-child{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 0 20px 10px;
    margin-right: 1rem;
    padding: 0 0.5rem;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);
    height: 100%;
    width: 3rem;
    background-color: #ccc;
  }
  span:nth-child(2){
    font-size: 2rem;
    font-weight: 600;
  }
  span:last-child{
    margin-left: auto;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 8rem 0rem 8rem;
  padding: 0 0.5rem;
  border-radius: 0 0 10px 10px;
  width: 16rem;
  height: 3rem;
  background-color: white;
  font-weight: 600;
  font-size: 1.4rem;
  box-shadow: inset 0px 0px 3px 0px rgba(0,0,0,1);

  img{
    width: 7rem;
    height: 2.5rem;
    margin: 0.25rem;
  }
`;

export const SmallTypes = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  width: 9rem;
  height: 2rem;

  img{
    width: 4rem;
    height: 1.429rem;
    margin: 0.1rem;
  }
`;

export const EvoGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  border-radius: 10px;
  width: 31rem;
  height: 16rem;
  background-color: white;
  font-weight: 600;
  font-size: 1.4rem;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);

  div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 31rem;
    height: 100%;
    box-shadow: none;
    margin: none;

    div{
      display: flex;
      flex-direction: column;
      width: 9rem;
      height: 13rem;
      margin: 0.5rem;
      border-radius: 10px;
      box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);

      .image{
        background-color: #ccc;
      }
    }
  }
`;