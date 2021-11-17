import React from "react";
import styled from "styled-components";

const RecipeGrid = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const Instructions = styled.ol`
  margin: 0 auto;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0rem 10rem;
  grid-row: 1/3;

  & li {
    margin: 1rem 0;
  }
`;

const Ingredients = styled.ul`
  font-size: 2rem;
  margin: auto auto;

  & li {
    margin: 2rem;
  }
`;

const RecipeImage = styled.img`
  margin: 0 auto;
  height: 100%;
  width: 90%;
  border-radius: 200px;
`;

const RecipeDetails = () => {
  return (
    <>
      <RecipeGrid>
        <Instructions>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            turpis mauris, elementum vel fringilla sit amet,
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            turpis mauris, elementum vel fringilla sit amet,
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            turpis mauris, elementum vel fringilla sit amet,
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            turpis mauris, elementum vel fringilla sit amet,
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            turpis mauris, elementum vel fringilla sit amet,
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            turpis mauris, elementum vel fringilla sit amet,
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            turpis mauris, elementum vel fringilla sit amet,
          </li>
        </Instructions>
        <RecipeImage src="/celebration-315079_1280.jpg"></RecipeImage>
        <Ingredients>
          <li>3 eggs.</li>
          <li>20 ounces of chicken.</li>
          <li>Pie Crust</li>
          <li>Peas</li>
          <li>Carrots</li>
          <li>Cream of Chicken Soup</li>
        </Ingredients>
      </RecipeGrid>
    </>
  );
};

export default RecipeDetails;
