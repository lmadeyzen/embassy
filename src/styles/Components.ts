import styled from "styled-components";
import { Colors } from "./Colors";

const MainHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Header = styled.h3`
  font-size: 1.5em;
`;

const Wrapper = styled.div`
  border-top: 4px solid ${Colors.red};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  padding-bottom: 2rem;
  position: relative;
`;

const Input = styled.input`
  height: 2.5rem;
  padding-left: 0.5rem;
  border: 1px solid ${Colors.grey};
  font-size: 1rem;
  transition: 0.25s;
  border-radius: 0.25rem;

  &:focus {
    outline: 2px solid ${Colors.blue};
    /* outline: none; */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${Colors.grey};
  padding: 1rem;
  border-radius: 0.2rem;
`;

const NavigateButton = styled.button`
  transition: all 0.5s;

  &:hover {
    background-color: ${Colors.red};
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px ${Colors.red};
    border: none;
  }
`;

const NavigateButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  button {
    width: 100%;
  }
`;

export {
  MainHeader,
  Wrapper,
  Header,
  Input,
  Form,
  NavigateButton,
  NavigateButtonsWrapper,
};
