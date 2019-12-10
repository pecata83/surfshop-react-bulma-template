import React from "react";
import {
  Box,
  Section,
  Container,
  Columns,
  Heading
} from "react-bulma-components/dist";
import Breadcrumbs from "./breadcrumbs";
import ProductList from "./productList";

export default () => {
  return (
    <Section>
      <Breadcrumbs></Breadcrumbs>
      <Container>
        <Columns>
          <Columns.Column size={8}>
            <Box>
              <ProductList />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Box>
          </Columns.Column>
          <Columns.Column size={4}>
            <Heading renderAs="h3">New Sails 2020</Heading>
            <img alt="" src="/img/sails.jpg" />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
