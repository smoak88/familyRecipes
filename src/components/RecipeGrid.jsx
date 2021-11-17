import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Grid = styled.div`
  background-color: white;
  width: 70%;
  margin: 30px auto;
  display: grid;
  grid-template-rows:
  grid-template-columns:
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
