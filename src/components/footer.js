import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagram,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";
import {
  Hero,
  Navbar,
  Container,
  Content,
  Footer
} from "react-bulma-components/dist";
import { Fade } from "react-reveal";

export default () => {
  return (
    <Fade>
      <Hero>
        <Hero.Footer>
          <Footer className={"has-background-dark has-text-light"}>
            <Container>
              <Navbar.Container color="dark" position="end">
                <Navbar.Brand>
                  <Navbar.Item renderAs="a" href="#">
                    <img
                      src="/img/logo.png"
                      alt="Surf shop template logo"
                      width="112"
                      height="28"
                    />
                  </Navbar.Item>
                </Navbar.Brand>
                <Navbar.Item href="#">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </Navbar.Item>
                <Navbar.Item href="#">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </Navbar.Item>
                <Navbar.Item href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Navbar.Item>
                <Navbar.Item href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </Navbar.Item>
                <Navbar.Item href="#">
                  <FontAwesomeIcon icon={faPinterest} />
                </Navbar.Item>
              </Navbar.Container>
            </Container>
            <Container>
              <Navbar.Container color="light" position="end">
                <Navbar.Item href="#">Windsurfing</Navbar.Item>
                <Navbar.Item href="#">Surf</Navbar.Item>
                <Navbar.Item href="#">Blog</Navbar.Item>
                <Navbar.Item href="#contact">Contact</Navbar.Item>
              </Navbar.Container>
            </Container>
            <Container
              style={{
                marginBottom: "-3rem",
                paddingTop: "3rem"
              }}
            >
              <Content style={{ textAlign: "center" }}>
                <p>
                  Surf Shop Template by{" "}
                  <a href="https://petarstefanov.com">Petar Stefanov</a>.
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    </Fade>
  );
};
