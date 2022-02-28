import React from "react";
import styled from "styled-components";
import test from "../Image/icon-team-builder.svg";

const Card = (props) => {
  return (
    <Container>
      <Wrapper>
        <CardTitleContentHold>
          <CardTitle> {props.Title} </CardTitle>
          <CardContent>{props.Content}</CardContent>
        </CardTitleContentHold>
        <CardIconHold>
          <img src={props.Icon} alt="" />
        </CardIconHold>
      </Wrapper>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 250px;
  height: 180px;
  /* background-color: red; */
  /* margin: 20px; */
  display: flex;
  justify-content: center;
  /* background: #fff; */
  background: ${(props) => props.theme.cardColor};
  align-items: center;
  font-family: poppins;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-top: 2px solid red;
  border-radius: 5px;
  margin: 20px 0;
`;
const Wrapper = styled.div`
  width: 225px;
  height: 160px;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardTitleContentHold = styled.div``;
const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${(props) => props.theme.titleColor};
`;
const CardContent = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.contentColor};
`;
const CardIconHold = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 50px;
  }
`;
