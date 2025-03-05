import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #ffffff;
  border: 2px solid var( --secundary-color);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 5px 5px var( --secundary-color);
  text-align: center;
  max-width: 900px;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 20px;
  h1 {
    color: var( --secundary-color);
    font-weight: 600;
    font-family: var(--font-family-container);
  }
  p {
    margin-top: 20px;
    font-size: 19px;
    font-family: var(--font-family-container);
  }
  @media (max-width: 768px) {
    max-width: 700px;
  }

  @media (max-width: 468px) {
    max-width:370px;
    p {
      margin-top: 20px;
      font-size: 16px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid var( --secundary-color);
  box-shadow: 0 3px 5px var( --secundary-color);
  border-radius: 20px;
  font-family: var(--font-family-container);
`;

export const DivButton = styled.div`
  text-align: center;
`;

export const Label = styled.label`
  text-align: left;
  font-family: var(--font-family-container);

`;
