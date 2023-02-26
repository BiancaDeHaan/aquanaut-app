import styled from "styled-components";
import type { NextPage } from "next";

const EndPage: NextPage = () => {
  return (
    <Box>
      <Title>Meet the Team</Title>
      <TeamMember>
        <Name>Bianca</Name>
        <Summary>Programmer</Summary>
      </TeamMember>
      <TeamMember>
        <Name>Gabby</Name>
        <Summary>Writer</Summary>
      </TeamMember>
    </Box>
  );
};

const Title = styled.h1`
  font-size: 4em;
  margin: 0.4em 0;
  color: teal;
  text-align: center;
`;

const Box = styled.div`
  width: 80%;
  margin: 5em auto;
  text-align: center;
`;

const TeamMember = styled.div`
  border-radius: 1em;
  background-color: teal;
  padding: 1.5em;
  margin: 2em;
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

export default EndPage;
