import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import icon1 from "../Image/icon-supervisor.svg";
import icon2 from "../Image/icon-team-builder.svg";
import icon3 from "../Image/icon-karma.svg";
import icon4 from "../Image/icon-calculator.svg";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Home = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  const iconic =
    props.theme === "light" ? <HiMoon size="30px" /> : <CgSun size="30px" />;

  return (
    <Container>
      <UpperText>
        <TextUp1>Reliable, Efficent Delivery</TextUp1>
        <TextUp2>Powered by Technology</TextUp2>
        <TextUp3>
          Our Artificial intelegence powered tool use millons of project data
          point to ensure that your project is sucessfull
        </TextUp3>
        <ButonHold>
          <strong>Change Mode</strong>
          <Button onClick={changeTheme}> {iconic} </Button>
        </ButonHold>
      </UpperText>
      <Wrapper>
        <Card
          Title="Supervisor"
          Content="Monitor activites to identify products roadblocks"
          Icon={icon1}
        />
        <TwoCardHold>
          <Card
            Title="Team Builder"
            Content="Scan our talented network to create the optimal team for your
            product"
            Icon={icon2}
          />
          <Card
            Title="Karma"
            Content=" Regulary eveluate our talents to ensure quality"
            Icon={icon3}
          />
        </TwoCardHold>
        <Card
          Title="Caculator"
          Content="Use data from past projects to provide better delivery extimates"
          Icon={icon4}
        />
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.generalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: poppins;
  transition: all 350ms;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 76%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const TwoCardHold = styled.div``;
const UpperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.contentColor};
`;
const TextUp1 = styled.div`
  font-size: 28px;
  font-weight: 280;
`;
const TextUp2 = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
const TextUp3 = styled.div`
  width: 420px;
  font-size: 14px;
  text-align: center;
`;
const ButonHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  outline: none;
  border: none;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;
