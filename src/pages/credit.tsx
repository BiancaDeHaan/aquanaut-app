import styled from "styled-components";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import { AnimationProps, SlideEffectWrapper, slideUp } from "../app/slideUpAnimation";

const Title = styled.h1`
  font-size: 4em;
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

const Box = styled.div`
  width: 80%;
  margin: 5em auto;
  text-align: center;
`;

const TeamMember = styled.div`
  border-radius: 1em;
  color: teal;
  padding: 1.5em;
  margin: 2em;
  border: solid;
`;

const TeamMemberAnim = styled(TeamMember)<AnimationProps>`
  animation: ${slideUp} ease ${(props) => props.duration || ".7s"} forwards
    ${(props) => props.delayTime || ".5s"};
  position: relative;
  opacity: 0;
`;

const Name = styled.h1`
  color: white;
  text-align: left;
`;

const Summary = styled.p`
  color: white;
  text-align: left;
  font-size: 1em;
`;

const CreditPage: NextPage = () => {
  return (
    <div>
      <Layout />
      <SlideEffectWrapper>
        <Box>
          <TitleAnim delayTime=".5s">Meet the Team</TitleAnim>
          <TeamMemberAnim delayTime="1s">
            <Name>Bianca</Name>
            <Summary>Programmer & Artist</Summary>
          </TeamMemberAnim>
          <TeamMemberAnim delayTime="1.5s">
            <Name>Gabby</Name>
            <Summary>Writer</Summary>
          </TeamMemberAnim>
        </Box>
      </SlideEffectWrapper>
    </div>
  );
};

export default CreditPage;
