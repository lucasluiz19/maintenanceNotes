import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  gap: 0.5rem;

  border: 1px solid gray;
  background: #0d47a1;
  color: white;
  padding: 0.7rem;
  line-height: 1.5;
  border-radius: 8px;

  p {
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }

  button {
    display: flex;
    background: #ff0000;
    
    align-items: center;
    margin: 0 auto;
    padding: 0.3rem;
    gap: 0.2rem;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: white;
  }
  button:hover {
    background: #f44336;
  }
`;
