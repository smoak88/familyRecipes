import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Grid = styled.div`
  background-color: transparent;
  width: 70%;
  margin: 30px auto;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10rem;
  grid-column-gap: 5rem;
`;

const RecipeGrid = () => {
  return (
    <Grid>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </Grid>
  );
};

export default RecipeGrid;
