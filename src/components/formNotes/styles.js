import styled from "styled-components";

export const FormContent = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-size: 1.2rem;

  p {
    text-align: center;
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 85%;
    gap: 0.8rem;
    padding: 1rem;
    border: 1px solid #f4f4f5;
    border-radius: 8px;
  }
  input {
    width: 18rem;
    font-size: 1rem;
    padding: 0.7rem;
    background: transparent;
    outline: none;
    color: #f4f4f5;
    border: 1px solid #f4f4f5;
  }
  input:focus{
    border:2px solid #0D47A1;
  }
  input::placeholder {
    color: #616161;
  }
  input[type="date"] {
    color: #f4f4f5;
    font-size: 1rem;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    font-size: 1.2rem;
    color: #f4f4f5;

    cursor: pointer;
  }

  select {
    width: 18rem;
    padding: 0.5rem;
    background-color: transparent;
    color: #f4f4f5;
    outline: none;
    border: 1px solid #f4f4f5;
    padding: 0.7rem;
    font-size: 1rem;
  }
  select:focus{
    border:2px solid #0D47A1;
  }
  
  textarea {
    padding: 0.7rem;
    background-color: #757575;
    resize: none;
    font-size: 1.1rem;
    color: #f4f4f5;
    border: none;
    outline: none;
  }
  span{
    width: 100%;
    display: flex;
    gap:1rem;
    justify-content: end;
  }
  button {
    display: flex;
    gap: 0.7rem;
    padding: 1rem;
    width: 7rem;
    justify-content: center;
    color: white;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
  }
  .cancelNote {
    background: #FF0000;
  }
  .cancelNote:hover {
    background: #8B0000;
  }
  .saveNote{
    background: #32CD32;
   
  }
  .saveNote:hover{
    background: #228B22;
  }
  `;
