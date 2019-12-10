import React from "react";
import { Breadcrumb, Container, Columns } from "react-bulma-components/dist";

export default () => {
  return (
    <Container>
      <Columns>
        <Columns.Column>
          <Breadcrumb
            items={[
              {
                name: "Shop",
                url: "/#1"
              },
              {
                name: "Windsurfing",
                url: "/#2"
              },
              {
                name: "Boards",
                url: "/#3"
              },
              {
                name: "Fanatic",
                url: "/#4",
                active: true
              }
            ]}
          />
        </Columns.Column>
      </Columns>
    </Container>
  );
};
