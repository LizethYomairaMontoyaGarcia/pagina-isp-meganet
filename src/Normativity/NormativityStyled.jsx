import styled from "styled-components";

export const Container = styled.div`
  padding-top: 130px;
  padding-bottom: 50px;
  @media screen and (max-width: 468px) {
    padding-top: 130px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  text-align: center;
  h1 {
    padding-bottom: 10px;
    color: var(--secundary-color);
    font-family: var(--font-family-container);
  }
  p {
    padding-bottom: 30px;
    padding-left: 100px;
    padding-right: 100px;
    font-size: 19px;
    font-family: var(--font-family-container);
  }
  h3 {
    padding-bottom: 30px;
    color: var(--secundary-color);
    font-family: var(--font-family-container);
    font-size: 1.6rem;
  }
  @media screen and (max-width: 468px) {
    h1 {
      padding-bottom: 10px;
    }
    p {
      font-size: 16px;
      padding-bottom: 10px;
      padding-left: 25px;
      padding-right: 25px;
    }
    h3 {
      padding-bottom: 10px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  @media screen and (max-width: 468px) {
    align-items: center;
    gap: 20px;
    overflow-x: auto;
    max-width: 90%;
  }
`;

export const StyledImageLink = styled.a`
  width: 12%;
  flex-shrink: 0;
  overflow: hidden;
  display: inline-block;

  @media screen and (max-width: 468px) {
    width: calc(26% - 10px);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 468px) {
    max-width: 95%;
    margin-bottom: 5px;
  }

  ${StyledImageLink}:hover & {
    transform: scale(1.1);
  }
`;

//////////////////////////////////////////////////////////////////////

export const DivStyledContainer = styled.div`
  text-align: center;
  width: 98%;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(5, 82, 209);
  @media screen and (max-width: 468px) {
    width: 93%;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  margin-top: 30px;
  color: var(--secundary-color);
  font-family: var(--font-family-container);
  font-size: 23px;
`;

export const StyledContainer = styled.div`
  display: flex;
  margin-top: 29px;
  margin-bottom: 20px;
  padding: 0 10px;
`;

//////////////////////////////////////////

export const DivAccordion = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
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
    color: var(--primary-color);
    font-family: var(--font-family-container);
  }
  &:hover {
    background-color: var(--primary-color);
    color: var(--fifth-color);
    a {
      color: var(--fifth-color);
    }
  }
`;
