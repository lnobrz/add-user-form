import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  padding: 30px;
`;

export const Label = styled.label`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 40%;
  padding: 5px;
  background: #eff0f4;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 10%;
  background: #272639;
  box-shadow: -2px 2px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px;

  @media (max-width: 923px) {
    width: 20%;
  }

  @media (max-width: 470px) {
    width: 30%;
  }
`;
