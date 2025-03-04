import React from "react";
import {
  Container,
  CardContainer,
  CardListMisionVision,
  CardItemMisionVision,
  CardContentMisionVision,
  CardTitletMisionVision,
  FigureMisionVision,
  ContainerValores,
  CardList,
  CardItem,
  CardContent,
  Figure,
} from "./AboutUsStyled";
import Header from "../generalComponent/headerGeneral/Header";
import Foother from "../generalComponent/footherGeneral/Foother";
import honestidad from "../assets/img/principios-morales.avif";
import trabajoEnEquipo from "../assets/img/trabajo-en-equipo.avif";
import compromiso from "../assets/img/compromiso.avif";
import innovación from "../assets/img/innovacion.avif";
import respeto from "../assets/img/respeto.avif";
import servicio from "../assets/img/agente-de-servicio-al-cliente.avif";
import mision from "../assets/img/mision.avif";
import vision from "../assets/img/vision.avif";
import quienSomos from "../assets/img/quienSomos.avif";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp.jsx";
import { Helmet } from "react-helmet";
import missionData from "../Data/infoIsp.json";
import visionData from "../Data/infoIsp.json";
import valuesData from "../Data/infoIsp.json";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nosotros | Meganet</title>
        <meta name="description" content="¿Quienes somos?" />
        <link rel="canonical" href="https://meganetfibrasas.net.co/nosotros" />
      </Helmet>
      <Header />
      <ChatWhatsapp />

      <Container>
        <h1>
          {" "}
          <strong>¿Quienes somos?</strong>
        </h1>
        <p>
          Meganet fibra tiene como objetivo principal el asesoramiento,
          implementación, comercialización, distribución y mantenimiento de
          servicios de internet y redes de intercomunicación, igual manera
          subcontratación, instalación y control de servicios informáticos y
          telecomunicación, como networking y banda ancha para todo tipo de
          empresa. La empresa Meganet fibra tiene una trayectoria de mas de 7
          años prestando el servicio a empresas y los hogares Tumaqueños,
          satisfaciéndoles una necesidad básica como es el servicio de internet,
          dentro de nuestra experiencia hemos tenido contrato con reconocidas
          empresas y cooperaciones internacionales.
        </p>
        <img src={quienSomos} alt="quienSomos" />
      </Container>

      <CardContainer>
        <CardListMisionVision>
          {missionData.mission.map((missionItem, index) => (
            <CardItemMisionVision key={index}>
              <FigureMisionVision>
                <img src={mision} alt="Honestidad" />
              </FigureMisionVision>
              <CardTitletMisionVision>
                {missionItem.title}
              </CardTitletMisionVision>
              <CardContentMisionVision>
                {missionItem.description}
              </CardContentMisionVision>
            </CardItemMisionVision>
          ))}

          {visionData.vision.map((visionItem, index) => (
            <CardItemMisionVision key={index}>
              <FigureMisionVision>
                <img src={vision} alt="TrabajoEnEquipo" />
              </FigureMisionVision>
              <CardTitletMisionVision>
                {visionItem.title}
              </CardTitletMisionVision>
              <CardContentMisionVision>
                {visionItem.description}
              </CardContentMisionVision>
            </CardItemMisionVision>
          ))}
        </CardListMisionVision>
      </CardContainer>

      {valuesData.values.map((valuesItem, index) => (
        <ContainerValores key={index}>
          <h2>
            {" "}
            <strong>{valuesItem.title}</strong>{" "}
          </h2>
          <CardList>
            <CardItem>
              <Figure>
                <img src={honestidad} alt="Ética y transparencia" />
              </Figure>
              <CardContent>{valuesItem.items.item1}</CardContent>
            </CardItem>
            <CardItem>
              <Figure>
                <img src={trabajoEnEquipo} alt="Trabajo en equipo" />
              </Figure>
              <CardContent>{valuesItem.items.item2}</CardContent>
            </CardItem>
            <CardItem>
              <Figure>
                <img src={compromiso} alt="Honestidad" />
              </Figure>
              <CardContent>{valuesItem.items.item3}</CardContent>
            </CardItem>
            <CardItem>
              <Figure>
                <img src={innovación} alt="Innovación" />
              </Figure>
              <CardContent>{valuesItem.items.item4}</CardContent>
            </CardItem>
            <CardItem>
              <Figure>
                <img src={respeto} alt="Respeto" />
              </Figure>
              <CardContent>{valuesItem.items.item5}</CardContent>
            </CardItem>
            <CardItem>
              <Figure>
                <img src={servicio} alt="Servicio al cliente" />
              </Figure>
              <CardContent>{valuesItem.items.item6}</CardContent>
            </CardItem>
          </CardList>
        </ContainerValores>
      ))}

      <Foother />
    </>
  );
};

export default AboutUs;
