import styled, { keyframes } from "styled-components";
import indexBackground from "../assets/img/tumaco2.avif";
import { Card } from "react-bootstrap";

export const Container = styled.div`
  background-image: url(${indexBackground});
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 88vh;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.532);
  }

  h1,
  p,
  div {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.7s ease-out, transform 0.7s ease-out;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    color: var(--fifth-color);
    padding-top: 80px;
    z-index: 2;
    font-size: 40px;
    font-family: var(--font-family-container);
  }

  p {
    color: var(--fifth-color);
    font-size: 20px;
    padding: 0 100px;
    margin-top: 20px;
    z-index: 2;
    font-family: var(--font-family-container);
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 35px;
      padding-top: 70px;
    }
  }

  @media screen and (max-width: 468px) {
    h1 {
      font-size: 35px;
      padding-top: 80px;
    }
    p {
      margin-top: 40px;
      padding: 0 30px;
    }
  }
`;

export const Contaprincipal = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

export const ButtonInfo = styled.button`
  z-index: 2;
  border-radius: 20px;
  display: inline-block;
  padding: 0.5rem 1.3rem;
  background-color: var(--fifth-color);
  border: 2px solid transparent;
  color: var(--primary-color);
  margin: 0 8px;
  font-family: var(--font-family-container);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  animation: ${pulse} 1.8s infinite;

  &:hover {
    background-color: var(--fifth-color);
    color: var(--primary-color);
    border-color: var(--primary-color);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

//////////////////////////////////////////////////////////////////////////////////
export const Divider = styled.div`
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 468px) {
    margin-top: 10px;
  }
  h2 {
    font-family: var(--font-family-container);
    color: var(--secundary-color);
  }
  h3 {
    font-family: var(--font-family-container);
    color: var(--sixth-color);
  }
  h4 {
    font-family: var(--primary-typography);
    color: var(--sixth-color);
    font-size:22px;
  }
  p {
    font-family: var(--primary-typography);
    color: var(--sixth-color);
  }
`;

export const DivDivGeneralCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DivGeneralCard = styled.div`
  width: 350px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CardContainerCenter = styled.div`
  padding: 20px;
  background-color: var(--fifth-color);
  border: 3px solid var( --secundary-color);
  box-shadow: 0 2px 5px var( --secundary-color);
  color: var(--fifth-color);
  text-align: center;
  border-radius: 20px;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
    background-color: #0553d129;
  }
  h2 {
    color: var( --secundary-color);
  }
`;

export const Conta = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/////////////////////////////////////////////////////////////////
export const Section = styled.section`
  width: 90%;
  margin: 30px auto;
  background-color: #0681e5b1;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(5, 82, 209);
`;

export const StyledCard = styled(Card)`
  text-align: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
  background: linear-gradient(145deg, #ffffffc1, #f0f0f06b);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.676), 0 5px 15px rgba(0, 0, 0, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.1);
  transform: perspective(1000px) translateZ(50px);
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: perspective(1000px) translateZ(80px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 10px 25px rgba(0, 0, 0, 0.3),
      inset 0 0 15px rgba(255, 255, 255, 0.6), inset 0 0 15px rgba(0, 0, 0, 0.2);
  }

  img {
    margin-top: 10px;
    width: 180px;
    border-radius: 100px;
  }

  .card-title {
    font-family: var(--primary-typography);
    font-size: 1.6rem;
  }

  .card-text {
    font-size: 1rem;
  }
`;

export const HeaderCards = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-family: var(--primary-typography);
  color: var(--fifth-color);
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  color: var(--sixth-color);
  font-family: var(--primary-typography);
`;

export const Subtitle2 = styled.h2`
  font-size: 18px;
  color: var(--sixth-color);
  font-family: var(--primary-typography);
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  gap: 30px;
`;

//////////////////////////////////////////////////////////////

export const DivServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  height: 100px;
`;

//////////////////////////////////////////////////////

export const DivAccordion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;

  h1 {
    font-family: var(--primary-typography);
    color: var(--secundary-color);
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
    color: var(--sixth-color);
    font-family: var(--primary-typography);
    text-align: center; /* Centrar el párrafo */
    padding: 0 20px; /* Añadir padding para mejor visualización en móviles */
    margin-bottom: 40px;
  }

  /* Estilos para los Accordions */
  .accordion {
    width: 100%; /* Asegurar que los Accordions ocupen todo el ancho disponible */
    max-width: 700px; /* Limitar el ancho máximo para pantallas grandes */
    margin-bottom: 20px; /* Espacio entre Accordions */
    border-color: var(--secundary-color);
  }

  .accordion-item {
    border: 1px solid #dee2e6; /* Añadir un borde para mejor visualización */
    border-radius: 5px;
    overflow: hidden; /* Asegurar que el contenido no se desborde */
  }

  .accordion-header {
    background-color: #f8f9fa; /* Color de fondo para el header */
    font-family: var(--primary-typography);
  }

  .accordion-body {
    padding: 15px;
  }

  /* Estilos para la tabla dentro del Accordion */
  .table {
    width: 100%;
    font-family: var(--primary-typography);
  }

  /* Media query para pantallas móviles */
  @media screen and (max-width: 468px) {
    p {
      font-size: 16px; /* Reducir el tamaño de la fuente en móviles */
    }

    .accordion {
      width: 100%; /* Asegurar que los Accordions ocupen todo el ancho disponible */
      max-width: 400px; /* Limitar el ancho máximo para pantallas grandes */
    }
    .table {
      font-size: 14px; /* Reducir el tamaño de la fuente de la tabla en móviles */
    }
  }
`;
