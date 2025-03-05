import React from "react";
import {
  StyledCard,
  CardBody,
  CardTitle,
  DivServices,
} from "./TermsAndConditionsStyled";
import Card from "react-bootstrap/Card";
import Header from "../generalComponent/headerGeneral/Header";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import { Helmet } from "react-helmet";
import { ButtonGeneral } from "../StyledGenerals";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Términos y condiciones | Meganet</title>
        <link
          rel="canonical"
          href="https://meganetfibrasas.net.co/TerminosyCondiciones"
        />
        <meta name="description" content="Términos y condiciones" />
      </Helmet>
      <Header />
      <ChatWhatsapp />

      <DivServices>
        <StyledCard>
          <CardBody>
            <CardTitle>¿Cómo Unirte a Nosotros?</CardTitle>
            <Card.Text>
              La instalación de nuestro servicio de internet tiene un costo de
              <strong>
                <em>$150.000.</em>
              </strong>
              <br />
              Para comenzar simplemente necesitamos una fotocopia de la cédula
              de la persona que va ser titular del servicio.
            </Card.Text>
            <br />
            <Card.Text>
              Para garantizar una instalación rápida y eficiente, es importante
              que nos comparta la ubicación de la vivienda y una foto de la
              plaqueta ubicada en tu hogar, para que nuestros técnicos puedan
              ubicarte sin problemas.
            </Card.Text>
          </CardBody>
        </StyledCard>

        <ButtonGeneral
          variant="primary"
          onClick={() =>
            (window.location.href =
              "https://web.whatsapp.com/send?phone=3136162815&text=Hola,%20me%20interesa%20contratar%20el%20servicio%20con%20ustedes%20me%20pueden%20dar%20mas%20información%20gracias.")
          }
        >
          ¡Quiero contratar el servicio!
        </ButtonGeneral>
      </DivServices>
    </>
  );
};

export default TermsAndConditions;
