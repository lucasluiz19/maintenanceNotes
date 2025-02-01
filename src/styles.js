import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.8rem;
    background-color: #0d47a1;
    color: #f4f4f5;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
  }
  button:hover {
    background-color: #1565c0;
  }
`;


