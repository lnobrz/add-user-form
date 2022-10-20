import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 10;
  display: grid;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
`;

export const WarningContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-color: white;
  height: 50vh;
  width: 80vh;
  border-radius: 10px;
`;

export const WarningHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 24px;
`;

export const WarningBody = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 10vh;
  height: 4vh;
  background: #272639;
  box-shadow: -2px 2px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: white;
`;
