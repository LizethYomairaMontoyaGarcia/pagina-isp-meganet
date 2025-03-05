import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 90%;
  max-width: 1200px; /* O un ancho máximo adecuado para tu diseño */
  margin: 120px auto 50px auto; /* Centra horizontalmente y añade márgenes */
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #008542;

  h1 {
    color: var(--secundary-color);
    margin-bottom: 20px;
    font-family: var(--font-family-container);
  }
  p {
    color: var(--sixth-color);
    padding: 0 25px;
    margin-top: 15px;
    font-size: 19px;
    font-family: var(--font-family-container);
  }

  img {
    width: 280px;
  }

  @media screen and (max-width: 468px) {
    height: auto;
    padding: 10px;
    p {
      padding: 0 10px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

/////////////////////////////////////////////////////////////////////////
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardListMisionVision = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

export const CardItemMisionVision = styled.li`
  width: calc(40% - 10px);
  margin: 10px;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(135deg, #00854360, #ffffff);
  transform-style: preserve-3d;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform: perspective(1000px) translateZ(0);
  border: 3px solid var(--room-color);

  &:hover {
    transform: perspective(1000px) translateZ(10px);
    box-shadow: 0 25px 30px rgba(0, 0, 0, 0.242),
      0 50px 100px rgba(0, 0, 0, 0.123);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 468px) {
    width: calc(90% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardContentMisionVision = styled.p`
  padding: 10px;
  font-size: 19px;
  transform: translateZ(20px);
  transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  @media screen and (max-width: 468px) {
    padding: 0 10px;
    font-size: 16px;
  }
`;

export const CardTitletMisionVision = styled.h2`
  font-family: var(--primary-typography);
  transform: translateZ(30px);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.342);
  transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
`;

export const FigureMisionVision = styled.figure`
  padding-top: 20px;
  transform: translateZ(40px);
  transition: transform 0.3s ease-in-out;

  img {
    width: 160px;
    transition: transform 0.3s ease-in-out;
    transform: translateZ(50px);
  }
`;

//////////////////////////////////////////////

export const ContainerValores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-family: var(--font-family-container);
    font-size: 2.5rem;
    color: var(--secundary-color);
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const CardItem = styled.li`
  width: calc(31% - 10px);
  margin: 10px;
  border: 4px solid var(--third-color);
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  background-color: white;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 468px) {
    width: calc(50% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &:hover {
    transform: perspective(900px) translateZ(10px);
    box-shadow: 0 25px 20px rgba(255, 255, 255, 0.243),
      0 10px 50px rgba(0, 0, 0, 0.327);
  }
`;

export const CardContent = styled.p`
  padding: 10px;
  font-family: var(--font-family-container);
  font-size: 1.2rem;
`;

export const Figure = styled.figure`
  padding-top: 20px;
  img {
    width: 90px;
  }
`;

///////////////////////////////////////////
