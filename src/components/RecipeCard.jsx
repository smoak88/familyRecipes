import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 30vh;
  width: 20vh;
  overflow: hidden;
  box-shadow: 0px 5px 10px rbga(o, o, o, 0.25);
  border-radius: 10px;
  display: flex;
`;
const Body = styled.div``;
const Button = styled.button``;

const Image = styled.img``;

const Title = styled.h2``;

const Description = styled.p``;

const RecipeCard = (props) => {
  return (
    <Card>
      <Body>
        <Image src="/celebration-315079_1280.jpg"></Image>
        <Title>Nulla posuere a mauris</Title>
        <Description>
          Quisque non purus vitae tortor aliquet ullamcorper non in lacus.{" "}
        </Description>
      </Body>
      <Button>View Recipe</Button>
    </Card>
  );
};

export default RecipeCard;
