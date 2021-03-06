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

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderText>
        <HeaderTitle>Family Recipes</HeaderTitle>
        <HeaderSubTitle>Pick Any Month!</HeaderSubTitle>
      </HeaderText>
    </HeaderDiv>
  );
};

export default Header;
