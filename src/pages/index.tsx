import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import Layout from "../components/Layout";
import {
  slideUp,
  SlideEffectWrapper,
  AnimationProps,
} from "../app/slideUpAnimation";

function IndexPage() {
  const router = useRouter();

  return (
    <Wrapper>
      <Layout />
      <SlideEffectWrapper>
        <Box>
          <TitleAnim delayTime=".5s">Aquanauts</TitleAnim>
          <ButtonAnim
            delayTime="1s"
            onClick={() => {
              router.push("/game");
            }}
          >
            Play Now
          </ButtonAnim>
        </Box>
      </SlideEffectWrapper>
    </Wrapper>
  );
}

const Box = styled.div`
  width: 80%;
  margin: 5em auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4.2em;
  margin: 0.4em 0;
  color: teal;
  text-align: center;
`;

const TitleAnim = styled(Title)<AnimationProps>`
  animation: ${slideUp} ease ${(props) => props.duration || ".7s"} forwards
    ${(props) => props.delayTime || ".5s"};
  position: relative;
  opacity: 0;
`;

const MenuButton = styled.button`
  border: solid;
  margin: 0.5em 0em;
  font-size: 1.3em;
  cursor: pointer;
  color: white;
  background-color: teal;
  padding: 1em 2em;
`;

const ButtonAnim = styled(MenuButton)<AnimationProps>`
  animation: ${slideUp} ease ${(props) => props.duration || ".7s"} forwards
    ${(props) => props.delayTime || ".5s"};
  position: relative;
  opacity: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default IndexPage;
