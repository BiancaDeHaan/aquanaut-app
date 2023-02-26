import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useTypingText } from "../app/useTypingTest";
import HomeDialog from "./AlertDialog";
import textImage from "../../public/bubble.png";
import nameImage from "../../public/name.png";
import logImage from "../../public/log.png";
import choiceImage from "../../public/choice_button.png";
import Log, { LogEntry } from "./Log";
// TODO consolidate setX from type into a function

interface Data {
  name?: string;
  text?: string;
  type?: string;
  choices?: string[];
  responses?: Data[][];
}

interface StoryData {
  story: Data[];
  nextChapter: () => void;
  chapter: number;
  character: string;
  background: string;
  height?: string;
  log: LogEntry[];
}

const dialogueType = "DIALOGUE";
const choiceType = "CHOICE";

function Game(props: StoryData) {
  const [type, setType] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  const [queue, setQueue] = useState<Data[]>();

  //Game related
  const [text, setText] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [responses, setResponses] = useState<Data[][]>();

  const [isLogOpen, setLogOpen] = useState<boolean>(false);

  const { word } = useTypingText(text, 50);

  function handleNextButtonClick() {
    console.log("Next button clicked");
    // Finish queue if not empty
    if (queue && queue.length > 0) {
      const value = queue.shift();
      if (value.type && value.type === "choice") {
        setType(choiceType);
        setResponses(value.responses);
      } else {
        setType(dialogueType);
        setText(value.text);
        setName(value.name);
      }
      return;
    }
    if (index < props.story.length - 1) {
      const update = index + 1;
      if (props.story[update].type && props.story[update].type === "choice") {
        setType(choiceType);
        setResponses(props.story[update].responses);
      } else {
        setType(dialogueType);
        setText(props.story[update].text);
        setName(props.story[update].name);
      }
      setIndex(update);
    } else {
      // Next chapter
      props.nextChapter();
      // End of story
    }
  }

  function handleLogButtonClick() {
    setLogOpen(true);
  }

  function handleExitLogButton() {
    setLogOpen(false);
  }

  function handleChoiceClick(data: Data[]) {
    var value = data;
    value.concat(queue);
    setQueue(value);
  }

  function keyDownHandler(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setLogOpen(false);
    }
  }

  useEffect(() => {
    if (props.story[index].type && props.story[index].type === "choice") {
      setType(choiceType);
      setResponses(props.story[index].responses);
    } else {
      setType(dialogueType);
      setText(props.story[index].text);
      setName(props.story[index].name);
    }

    document.addEventListener("keydown", keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (queue) handleNextButtonClick();
  }, [queue]);

  function generateChoices() {
    const choices = props.story[index].choices.map((choice, num) => (
      <Choice
        onClick={() => handleChoiceClick(props.story[index].responses[num])}
        key={num}
      >
        <Image src="/choice_button.png" />
        <ChoiceText>{choice}</ChoiceText>
      </Choice>
    ));

    return <ChoiceArea>{choices}</ChoiceArea>;
  }

  return (
    <Wrapper>
      <Background src={"/backgrounds/hq.png"} />
      <Character
        height={props.height}
        src={"/characters/" + props.character + ".png"}
      />
      {isLogOpen && <Log onExit={handleExitLogButton} logs={props.log} />}
      <LogButton>
        <Image src="/log.png" onClick={handleLogButtonClick} />
      </LogButton>
      <HomeDialog />
      {type === dialogueType && (
        <DialogueArea>
          <TextArea>
            <NameArea>
              <NameText>{name}</NameText>
            </NameArea>
            <Image src="/bubble.png" />
            <Text>{word}</Text>
            <NextButton onClick={handleNextButtonClick}>
              <NameText>Next</NameText>
            </NextButton>
          </TextArea>
        </DialogueArea>
      )}
      {type === choiceType && generateChoices()}
    </Wrapper>
  );
}

const Background = styled.img`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

const Character = styled.img`
  position: fixed;
  left: 4%;
  bottom: 10%;
  height: ${(props) => props.height + "%" || "80%"};
`;

const LogButton = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 5%;
  border-radius: 50%;
  z-index: 3;
  &:hover {
    cursor: pointer;
  }
`;

const NextButton = styled.div`
  right: 0;
  bottom: 0;
  position: absolute;
  width: 15%;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

const ChoiceArea = styled.div`
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Choice = styled.div`
  text-align: center;
  position: relative;
  display: block;
  font-size: 1.2em;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

const DialogueArea = styled.div`
  bottom: 0%;
  text-align: center;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const NameArea = styled.div`
  position: relative;
  text-align: center;
  display: block;
`;

const ChoiceText = styled.p`
  font-size: 1.2em;
  margin: 0em;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 80%;
`;

const NameText = styled.h1`
  font-size: 1.5em;
  margin: 0em;
  text-align: left;
  border: solid;
  border-radius: 2em;
  width: fit-content;
  padding: 10px 20px;
  background-color: white;
  border-color: darkblue;
`;

const TextArea = styled.div`
  position: relative;
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const Text = styled.div`
  font-size: 1.5em;
  margin: 0em;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  width: 80%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Game;
