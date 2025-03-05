import React, { useState, useRef, useEffect } from "react";
import Foother from "../generalComponent/footherGeneral/Foother";
import Header from "../generalComponent/headerGeneral/Header";
import {
  DivSpeed,
  DivSpeedImg,
  P,
  H1,
  ModalWrapper,
  ModalContent,
  Section,
  Cards,
  CardList,
  CardItem,
  CardHeader,
  ButtonClose,
  DivPlans,
  Conta,
  CardGrid,
  CardItemCustomers,
  CardContent,
  Div,
  Img,
  DivGeneral,
  DivMpas,
  DivForm,
  DivCoverageMaps,
} from "./HomeStyled";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import FormContact from "../Forms/FormContact";
import { ButtonGeneral, ButtonGeneralPulse } from "../StyledGenerals";
import plansData from "../Data/plans.json";
import opinions from "../Data/infoIsp.json";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contrato from "../assets/img/contrato.gif";
import Herramienta from "../assets/img/mecanico.gif";
import Rapido from "../assets/img/rapido.gif";
import Nube from "../assets/img/nube.gif";
import Carousel from "react-bootstrap/Carousel";
import Internet from "../assets/img/home.avif";
import Redes from "../assets/img/internetcasa.avif";
import Tumaco2 from "../assets/img/Tumaco-Narino.avif";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import coverageData from "../Data/infoIsp.json";

const StyledCarouselItem = styled(Carousel.Item)`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const StyledCaption = styled(Carousel.Caption)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;

  h3 {
    font-size: 40px;
    position: relative;
    z-index: 3;
    @media (max-width: 468px) {
      font-size: 30px;
    }
  }
`;

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const textRef = useRef(null);

  const toggleModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleNavigate = () => {
    navigate("/servicios");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inicio | Meganet</title>
        <link rel="canonical" href="https://meganetfibrasas.net.co" />
        <meta name="description" content="Intenet alta velocidad" />
      </Helmet>
      <div>
        <Header />
        <ChatWhatsapp />

        <Carousel fade>
          <StyledCarouselItem style={{ height: "100vh" }}>
            <Img src={Redes} alt="Tumaco" text="First slide" />
            <StyledCaption>
              <h3 ref={textRef}>
                Velocidad que te conecta, precios que te convencen. <br />
                <strong>Meganet Fibra S.A.S</strong>, tu mejor elección.
              </h3>
            </StyledCaption>
          </StyledCarouselItem>

          <StyledCarouselItem style={{ height: "100vh" }}>
            <Img src={Tumaco2} alt="Internet" text="Second slide" />
            <StyledCaption>
              <h3>
                Más que internet, una experiencia de conexión inigualable.
              </h3>
            </StyledCaption>
          </StyledCarouselItem>

          <StyledCarouselItem style={{ height: "100vh" }}>
            <Img src={Internet} alt="Internet" text="Third slide" />
            <StyledCaption>
              <h3>Tu satisfacción es nuestra prioridad.</h3>
            </StyledCaption>
          </StyledCarouselItem>
        </Carousel>

        <div>
          <div>
            <Section>
              <Cards>
                <h1>
                  <strong>PLANES PERFECTOS PARA TI</strong>
                </h1>
                <p>
                  ¡Contáctanos hoy mismo para conocer más sobre nuestros planes
                  y encontrar la opción perfecta para ti!
                </p>
              </Cards>

              <CardList>
                <CardItem>
                  <CardHeader>
                    <h1>
                      <strong>Planes Residenciales</strong>
                    </h1>
                  </CardHeader>
                  <p>
                    <strong>{plansData.residentPlans[0].services}</strong>
                  </p>
                  <p>Estos son nuestros planes</p>
                  <DivPlans>
                    {plansData.residentPlans.map((plan, index) => (
                      <div key={index}>
                        <strong>
                          <p>{plan.plans}Mb</p>
                        </strong>
                      </div>
                    ))}
                  </DivPlans>
                  <ButtonGeneral onClick={toggleModal}>
                    Adquirir el servicio
                  </ButtonGeneral>
                </CardItem>

                <CardItem>
                  <CardHeader>
                    <h1>
                      <strong>Planes Corporativos</strong>
                    </h1>
                  </CardHeader>
                  <p>
                    <strong>{plansData.corporatePlan[0].services}</strong>
                  </p>
                  <p>Estos son nuestros planes</p>
                  <DivPlans>
                    {plansData.corporatePlan.map((plan, index) => (
                      <div key={index}>
                        <strong>
                          <p>{plan.plans}Mb</p>
                        </strong>
                      </div>
                    ))}
                  </DivPlans>
                  <ButtonGeneral onClick={toggleModal}>
                    Adquirir el servicio
                  </ButtonGeneral>
                </CardItem>
              </CardList>

              <ModalWrapper open={isModalOpen} onClick={toggleModal}>
                <ModalContent>
                  <FormContact />
                  <ButtonClose onClick={() => setIsModalOpen(false)}>
                    X
                  </ButtonClose>
                </ModalContent>
              </ModalWrapper>

              <Conta>
                <ButtonGeneralPulse onClick={handleNavigate}>
                  Deseo ver todos los planes
                </ButtonGeneralPulse>
              </Conta>
            </Section>
          </div>

          <DivSpeed>
            <H1>Experiencia sin interrupciones</H1>
            <P>
              ¡Disfruta de una conexión a internet sin preocupaciones!. <br />
              Con nuestros planes, obtienes velocidad simétrica para navegar,
              trabajar y disfrutar sin interrupciones. <br /> Olvídate de las
              caídas y experimenta una conexión estable y rápida en todo
              momento.
            </P>

            <DivSpeedImg>
              <div>
                <img src={Rapido} alt="rapido" />
                <p>
                  {" "}
                  <strong>Servicio 24/7</strong>
                </p>
              </div>
              <div>
                <img src={Nube} alt="nube" />
                <p>
                  {" "}
                  <strong>Servicio Ilimitad</strong>o
                </p>
              </div>
              <div>
                <img src={Contrato} alt="doc" />
                <p>
                  {" "}
                  <strong>Sin cláusulas</strong>{" "}
                </p>
              </div>
              <div>
                <img src={Herramienta} alt="mecanico" />
                <p>
                  {" "}
                  <strong>Instalación rapida</strong>
                </p>
              </div>
            </DivSpeedImg>
          </DivSpeed>
        </div>

        <Div>
          <h1>Descubre por qué nuestros clientes nos prefieren.</h1>
          <CardGrid>
            {opinions.opinions.map((opinion, index) => (
              <CardItemCustomers key={index}>
                <CardContent>{opinion.opinion}</CardContent>
              </CardItemCustomers>
            ))}
          </CardGrid>
        </Div>

        <DivCoverageMaps>
          <h1>Conoce nuestra ubicación</h1>

          {coverageData.coverage.map((coverageItem, index) => (
            <Card
              key={index}
              style={{
                color: "black",
                fontSize: "1.3rem",
                alignItems: "center",
              }}
            >
              <Card.Body>
                <Card.Text style={{ textAlign: "center", marginTop: "30px" }}>
                  <p>{coverageItem.zones}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}

          <DivGeneral>
            <DivMpas>
              <iframe
                src="https://www.google.com/maps/d/u/6/embed?mid=1TpVGfB6r12dIc9biIk3tuZnXT9MzC_Q&ehbc=2E312F"
                title="Google Maps"
              ></iframe>
            </DivMpas>

            <DivForm>
              <FormContact />
            </DivForm>
          </DivGeneral>
        </DivCoverageMaps>

        <Foother />
      </div>
    </>
  );
};
