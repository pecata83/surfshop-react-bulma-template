import React from "react";
import { Fade } from "react-reveal";

import {
  Section,
  Hero,
  Container,
  Columns,
  Heading
} from "react-bulma-components/dist";

export default () => {
  return (
    <Section style={{ paddingBottom: 0 }}>
      <Fade>
        <Container>
          <Hero
            style={{
              backgroundImage: `url('/img/hero2.jpeg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "400px"
            }}
          >
            <Hero.Body>
              <Heading size={1} className="has-text-white">
                Windsurfing
              </Heading>
              <Heading
                className="has-text-white"
                renderAs="h2"
                subtitle
                size={3}
              >
                Fanatic Boards
              </Heading>
              <Columns>
                <Columns.Column mobile={{ size: 2 }} size={1}></Columns.Column>
              </Columns>
            </Hero.Body>
          </Hero>
        </Container>
      </Fade>
    </Section>
  );
};
