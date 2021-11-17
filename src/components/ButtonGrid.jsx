import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  background-color: transparent;
  width: 50%;
  margin: 5rem auto 10rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
`;

const MonthButton = styled.button`
  margin: 0 1rem;
  padding: 1rem 0;
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonGrid = () => {
  return (
    <Grid>
      <MonthButton>January</MonthButton>
      <MonthButton>February</MonthButton>
      <MonthButton>March</MonthButton>
      <MonthButton>April</MonthButton>
      <MonthButton>May</MonthButton>
      <MonthButton>June</MonthButton>
      <MonthButton>July</MonthButton>
      <MonthButton>August</MonthButton>
      <MonthButton>September</MonthButton>
      <MonthButton>October</MonthButton>
      <MonthButton>November</MonthButton>
      <MonthButton>December</MonthButton>
    </Grid>
  );
};
export default ButtonGrid;
