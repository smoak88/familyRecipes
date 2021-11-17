import React from "react";
import RecipeGrid from "./RecipeGrid";
import ButtonGrid from "./ButtonGrid";
import Header from "./Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <ButtonGrid />
      <RecipeGrid />
    </>
  );
};
export default HomePage;
