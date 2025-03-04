import React, { useRef, useState, useEffect } from "react";
import Header from "../generalComponent/headerGeneral/Header";
import {
  DivGeneralCard,
  Divider,
  Container,
  CardContainerCenter,
  DivDivGeneralCard,
  Section,
  Title,
  Subtitle,
  Subtitle2,
  CardList,
  HeaderCards,
  Conta,
  DivServices,
  StyledCard,
  ButtonInfo,
  Contaprincipal,
  DivAccordion,
} from "./ServicesStyled";
import Foother from "../generalComponent/footherGeneral/Foother";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import PuntoFisico from "../assets/img/pagofisicooo.avif";
import PuntoLinea from "../assets/img/pagoenlinea.avif";
import plansData from "../Data/plans.json";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { ButtonGeneral, ButtonGeneralPulse } from "../StyledGenerals";
import { Helmet } from "react-helmet";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

const Services = () => {
  const [planType, setPlanType] = useState("residentPlans");
  const navigate = useNavigate();
  const internetSectionRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateTerms = () => {
    navigate("/TerminosyCondiciones");
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = containerRef.current.querySelectorAll("h1, p, div");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Servicos | Meganet</title>
        <link rel="canonical" href="https://meganetfibrasas.net.co/Servicios" />
        <meta name="description" content="Nuestros servicios" />
      </Helmet>
      <div>
        <Header />
        <ChatWhatsapp />

        <div>
          <Container ref={containerRef}>
            <h1>
              FIBRA ÓPTICA
              <br />
              LA CALIDAD ES NUESTRO SERVICIO
            </h1>
            <br />
            <p>
              Personaliza tu plan y disfruta de una conexión estable para hacer
              lo que más te gusta. <br />
              ¡Navega a toda velocidad!
            </p>

            <Contaprincipal>
              <ButtonInfo
                onClick={() => {
                  setPlanType("residentPlans");
                  scrollToSection(internetSectionRef);
                }}
              >
                <strong> Internet</strong>
              </ButtonInfo>
            </Contaprincipal>
          </Container>

          <div ref={internetSectionRef}>
            <Conta>
              <ButtonGeneral onClick={() => setPlanType("residentPlans")}>
                strPlan Residencial
              </ButtonGeneral>
              <ButtonGeneral onClick={() => setPlanType("corporatePlan")}>
                Plan Corporativo
              </ButtonGeneral>
            </Conta>

            <Divider>
              <h2>
                <strong>
                  PLAN{" "}
                  {planType === "residentPlans" ? "RESIDENCIAL" : "CORPORATIVO"}
                </strong>
              </h2>

              <DivDivGeneralCard>
                {plansData[planType].map((plan) => (
                  <DivGeneralCard key={plan.id}>
                    <CardContainerCenter>
                      <div key={plan.id}>
                        <h3> Internet {plan.services}</h3>
                        <h2>
                          <strong>{plan.plans}Mb</strong>
                        </h2>
                        <h4>
                          <strong>${plan.price}</strong>
                        </h4>
                        <p>{plan.items.item1}</p>
                        <p>{plan.items.item2}</p>
                        <p>{plan.items.item3}</p>
                        <p>{plan.items.item4}</p>
                        <ButtonGeneral
                          onClick={() =>
                            (window.location.href =
                              "https://api.whatsapp.com/send?phone=3136162815&text=Hola,%20me%20interesa%20contratar%20el%20servicio%20con%20ustedes%20me%20pueden%20dar%20mas%20información%20gracias.")
                          }
                        >
                          <em>
                            <strong>Lo quiero</strong>
                          </em>
                        </ButtonGeneral>
                      </div>
                    </CardContainerCenter>
                  </DivGeneralCard>
                ))}
              </DivDivGeneralCard>
            </Divider>
          </div>

          <DivAccordion>
            <h1>
              <strong>Tenemos más servicios para ti</strong>
            </h1>
            <p>
              Te ofrecemos una variedad de servicios adicionales para que
              encuentres todo lo que necesitas.
            </p>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Canal Internet dedicado</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Velocidad</th>
                        <th>Valor por Plan</th>
                        <th>Instalación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10Mb a 100Mb</td>
                        <td>40.000 + Iva</td>
                        <td>Segun visita técnica</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Enlace dedicado sin internet
                </Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Velocidad</th>
                        <th>Valor por Plan</th>
                        <th>Instalación</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plansData.dedicatedChannelNotInternet.map((plan) => (
                        <tr key={plan.id}>
                          <td>{plan.plans}</td>
                          <td>{plan.price} + Iva</td>
                          <td>{plan.items.item1}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </DivAccordion>

          <Section>
            <HeaderCards>
              <Title>
                <strong>Medios de pago</strong>
              </Title>
              <Subtitle>No dejes pasar el pago de tu factura</Subtitle> <br />
              <Subtitle2>
                <em>
                  La fecha límite para realizar el pago es el día 26 de cada
                  mes.
                </em>
              </Subtitle2>
            </HeaderCards>

            <CardList>
              <StyledCard style={{ width: "20rem" }}>
                <Card.Img variant="top" src={PuntoFisico} />
                <Card.Body>
                  <Card.Title>Punto físico</Card.Title>
                  <Card.Text>
                    Calle del comercio con taguera, edificio Maja, segundo piso
                  </Card.Text>
                  <ButtonGeneral
                    variant="primary"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps?q=1.787420, -78.791214",
                        "_blank"
                      )
                    }
                  >
                    <em>
                      <strong> Ir al mapa</strong>
                    </em>
                  </ButtonGeneral>
                </Card.Body>
              </StyledCard>

              <StyledCard style={{ width: "20rem" }}>
                <Card.Img variant="top" src={PuntoLinea} />
                <Card.Body>
                  <Card.Title>Pago en linea</Card.Title>
                  <Card.Text>
                    Transferencia o consignación, cuenta corriente <em />{" "}
                    Bancolombia
                    <strong>89400011192</strong> a nombre de{" "}
                    <strong>Meganet Fibra S.A.S.</strong>
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </CardList>
          </Section>

          <DivServices id="requirements">
            <ButtonGeneralPulse onClick={handleNavigateTerms}>
              Términos y condiciones de la prestación del servicio
            </ButtonGeneralPulse>
          </DivServices>
        </div>
        <Foother />
      </div>
    </>
  );
};

export default Services;
