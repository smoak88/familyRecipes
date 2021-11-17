import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: white;
  width: 30vh;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0px 2px 15px black;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.05);
  }

  &:hover button {
    background: red;
    color: white;
  }
`;
const Body = styled.div`
  text-align: center;
`;
const Button = styled.button`
  padding: 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  border: 2px solid red;
  border-radius: 8px;
  transition: all 200ms ease-in;
`;

const Image = styled.img`
  height: 20rem;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  padding: 2rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0 1rem;
`;

const RecipeCard = (props) => {
  return (
    <Link style={{ textDecoration: "none" }} to="/recipes">
      <Card>
        <Body>
          <Image src="/celebration-315079_1280.jpg"></Image>
          <Title>Chicken Pot Pie</Title>
          <Description>
            A delicious mixture of tender chicken and veggies cooked inside a
            pie crust with cream of chicken.
          </Description>
        </Body>
        <Button>View Recipe</Button>
      </Card>
    </Link>
  );
};

export default RecipeCard;
