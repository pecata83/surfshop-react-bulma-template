import React, { useState } from "react";
import { Navbar, Container } from "react-bulma-components/dist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);
  return (
    <Navbar
      className="top-navbar"
      color={"primary"}
      fixed={"top"}
      active={false}
      transparent={false}
    >
      <Container>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="/img/logo.png"
              alt="Surf shop template logo"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger
            onClick={event => setIsVisibleMobile(!isVisibleMobile)}
          />
        </Navbar.Brand>
        <Navbar.Menu style={isVisibleMobile ? { display: "flex" } : {}}>
          <Navbar.Container>
            <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link arrowless={false}>Windsurfing</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="#">Sails</Navbar.Item>
                <Navbar.Item href="#">Boards</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="#">Surf</Navbar.Item>
            <Navbar.Item href="#">Blog</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#contact">
              Contact&nbsp;
              <FontAwesomeIcon icon={faEnvelope} />
            </Navbar.Item>
            <Navbar.Item href="#contact">
              Cart&nbsp;
              <FontAwesomeIcon icon={faShoppingCart} />
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};

export default NavBar;
