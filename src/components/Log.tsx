import LogBookImage from "../../public/logbook.png";

import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
/* eslint-disable @next/next/no-img-element */

export interface LogEntry {
  room_name: string;
  room_description: string;
  char_name: string;
  age: string;
  height: string;
  favorite_color: string;
  occupation: string;
  hobbies: string;
  misc_info: string;
}

interface LogInfo {
  onExit: () => void;
  logs: LogEntry[];
}

const divStyle = {
  height: "500px",
};

function Log(props: LogInfo) {
  const [index, setIndex] = useState<number>(0);

  function clickArrow() {
    if (index < props.logs.length -1) setIndex(index + 1);
  }

  return (
    <LogWrapper>
      <Container>
        <LogImage src={"/logbook.png"} />
        <LogInfo>
          <LogColumn>
            <p>Logbook: {props.logs[index].char_name}</p>
            <Text>Age: {props.logs[index].age}</Text>
            <Text>Height: {props.logs[index].height}</Text>
            <Text>Fav. Color: {props.logs[index].favorite_color}</Text>
            <Text>Hobbies: {props.logs[index].hobbies}</Text>
            <Text>Misc: {props.logs[index].misc_info}</Text>
          </LogColumn>
          <LogColumn>
            <Text>Occupation: {props.logs[index].occupation}</Text>
            <Text>Room: {props.logs[index].room_name}</Text>
            <Text>{props.logs[index].room_description}</Text>
          </LogColumn>
        </LogInfo>
        {index < props.logs.length-1 && (
          <ArrowImage src="/arrow.png" onClick={clickArrow} />
        )}
      </Container>
    </LogWrapper>
  );
}
export default Log;

const LogColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
`;

const LogImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
`;

const LogWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  overflow-x: hidden;
`;

const LogInfo = styled.div`
  position: relative;
  font-size: 40px;
  top: 14%;
  display: flex;
  justify-content: center;
  column-gap: 100px;
`;

const Text = styled.div`
  font-size: 18px;
`;

const ArrowImage = styled.img`
  position: absolute;
  right: 12%;
  bottom: 15%;
  height: 80px;
  width: 80px;
  &:hover {
    cursor: pointer;
  }
`;
