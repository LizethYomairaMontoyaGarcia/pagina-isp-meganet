import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//////////////////////////////////

export const DivContact = styled.div`
  display: flex;
  background-color: #dfdfdf;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  div {
    justify-content: center;
    margin-left: 150px;
    margin-top: 10px;
    h1 {
      font-size: 3rem;
      margin-top: 30px;
      text-align: center;
    }
    p {
      font-size: 1.3rem;
      text-align: center;
      margin-top: 20px;
    }
  }
`;
////////////////////////////////////////////////////////////////////////////
export const DivSpeed = styled.div`
  text-align: center;
  width: 90%;
  margin: 30px auto;
  background-color: var(--fifth-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(5, 82, 209);

  @media (min-width: 768px) {
    width: 80%;
    padding: 40px;
  }
`;

export const H1 = styled.h1`
  font-size: 30px;
  margin-top: 0;
  color: var(--secundary-color);

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  margin-top: 20px;
  color: var(--sixth-color);
  line-height: 1.6;
  font-family: var(--font-family-container);

  @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 30px;
  }
`;

export const DivSpeedImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  div {
    text-align: center;
    margin: 10px;
    flex-basis: 45%;
  }

  img {
    width: 80px;
    margin-bottom: 10px;
  }

  p {
    color: var(--primary-color);
    font-family: var(--font-family-container);
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    margin-top: 40px;

    div {
      margin: 20px;
      flex-basis: 25%;
    }

    img {
      width: 100px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    div {
      flex-basis: 50% !important;
      margin: 10px 0;
    }
  }
`;
//Estilos para el modal
export const ModalWrapper = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 25px;
  border-radius: 20px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 23px;
`;

////////////////////////////////////////////////////////////////////
export const ImgRedes = styled.img`
  width: 30px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

///////////////////////////////////////////////////////////////////

export const Section = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 20px;
`;

export const Cards = styled.header`
  margin-bottom: 25px;
  text-align: center;
  h1 {
    font-family: var(--font-family-container);
    color: var(--secundary-color);
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 50px;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.3rem;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Conta = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 468px) {
    flex-direction: column;
    height: auto;
  }
`;

export const HeaderCards = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
  @media (max-width: 470px) {
    margin-top: 20px;
  }
`;

export const CardItem = styled.li`
  width: 400px;
  margin: 10px;
  border: 2px solid var(--primary-color);
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  padding-bottom: 20px;
  box-shadow: 0 2px 10px var(--primary-color);

  @media (max-width: 1024px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 468px) {
    width: 500px;
  }

  &:hover {
    transform: scale(1.03);
    transition: transform 0.5s ease;
  }
`;

export const CardHeader = styled.header`
  padding: 5px;
  height: 70px;
  margin-top: 40px;
  margin-bottom: 8px;
  h1 {
    color: var(--room-color);
    font-family: var(--font-family-container);
    font-size: 1.7rem;
    padding-top: 15px;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const DivPlans = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  div {
    border-right: 1px solid #ccc;
    padding: 0 15px;
    text-align: center;
  }
  div:last-child {
    border-right: none;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    div {
      border-right: 1px solid #ccc;
      border-bottom: none;
      padding: 10px 15px;

      text-align: center;
    }
    div:last-child {
      border-right: none;
      border-bottom: none;
    }
  }
`;
/////////////////////////////////////////////////////////////////////////////////////

export const Div = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 50px;
  padding-left: 15px;
  padding-right: 15px;

  h1 {
    color: var(--secundary-color);
    font-family: var(--font-family-container);
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 30px auto;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardItemCustomers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid var(--third-color);
  border-radius: 20px;
  background-color: white;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: perspective(900px) translateZ(10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const CardContent = styled.p`
  font-family: var(--font-family-container);
  font-size: 1.1rem;
`;
///////////////////////////////////////////////////////
export const DivCoverageMaps = styled.div`
  border: 1px solid #ccc;
  padding: 30px;
  box-shadow: 0 2px 15px var(--third-color);

  h1 {
    align-items: center;
    text-align: center;
    font-family: var(--font-family-container);
    color: var(--secundary-color);
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-right: 0;
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivMpas = styled.div`
  text-align: center;
  margin-right: 20px;
  iframe {
    width: 500px;
    height: 400px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const DivForm = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 15px var(--primary-color);
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-right: 0;
  }
`;
