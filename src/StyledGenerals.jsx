import styled, { keyframes } from "styled-components";
import "./assets/variables/variables.css";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const ButtonGeneral = styled.button`
  border-radius: 20px;
  padding: 0.5rem 1.3rem;
  background-color: var(--fifth-color);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  margin: 0 2px;
  font-family: var(--font-family-container);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffffff;
    font-family: var(--font-family-container);
  }
  &:hover {
    background-color: var(--primary-color);
    color: var(--fifth-color);
    border-color: var(--primary-color);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05) a {
      color: var(--primary-color);
    }
  }
`;

export const ButtonGeneralPulse = styled.button`
  border-radius: 20px;
  padding: 0.5rem 1.3rem;
  background-color: var(--fifth-color);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  margin: 0 2px;
  font-family: var(--font-family-container);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  animation: ${pulse} 1.8s infinite;

  a {
    text-decoration: none;
    color: #ffffff;
    font-family: var(--font-family-container);
    font-weight: 400;
  }
  &:hover {
    background-color: var(--primary-color);
    color: var(--fifth-color);
    border-color: var(--primary-color);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05) a {
      color: var(--primary-color);
    }
  }
`;
