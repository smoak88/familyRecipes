import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 40vh;
  position: relative;
`;

const HeaderText = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderTitle = styled.h1`
  font-size: 10rem;
  text-transform: uppercase;
`;

const HeaderSubTitle = styled.h2`
  margin-top: 3rem;
  font-size: 5rem;
`;

const RecipePageHeader = () => {
  return (
    <HeaderDiv>
      <HeaderText>
        <HeaderTitle>Chicken Pot Pie</HeaderTitle>
        <HeaderSubTitle>From the month of November!</HeaderSubTitle>
      </HeaderText>
    </HeaderDiv>
  );
};

export default RecipePageHeader;
