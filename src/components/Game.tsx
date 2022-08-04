import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useTypingText } from '../app/useTypingTest';
import HomeDialog from './AlertDialog';
import textImage from '../../public/bubble.png';
import nameImage from '../../public/name.png';
import logImage from '../../public/log.png';
import choiceImage from '../../public/choice_button.png';
import Log from './Log';
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
    nextChapter: () => void
    chapter: number;
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

    const { word } = useTypingText(
        text,
        50
    );


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
        }
        else {
            // Next chapter
            props.nextChapter();
            // End of story
        }
    }

    function handleLogButtonClick() {
        setLogOpen(true);
    }

    function handleChoiceClick(data: Data[]) {
        var value = data;
        value.concat(queue);
        setQueue(value);
    }

    function keyDownHandler(e: KeyboardEvent) {
        if(e.key === "Escape") {
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

        document.addEventListener('keydown', keyDownHandler);

        // 👇️ clean up event listener
        return () => {document.removeEventListener('keydown', keyDownHandler);
    };
    }, []);

    useEffect(() => {
        if (queue) handleNextButtonClick();
    }, [queue]);

    function generateChoices() {
        const choices = props.story[index].choices.map((choice, num) =>
            <Choice onClick={() => handleChoiceClick(props.story[index].responses[num])} key={num}>
                <Image src={choiceImage} />
                <ChoiceText>{choice}</ChoiceText>
            </Choice>);

        return (
            <ChoiceArea>{choices}</ChoiceArea>
        )
    }

    return (
        <div>
            {isLogOpen && <Log/>}
            <LogButton>
                <Image src={logImage} onClick={handleLogButtonClick} />
            </LogButton>
            <HomeDialog />
            {type === dialogueType &&
                <DialogueArea>
                    <NameArea>
                        <Image src={nameImage} />
                        <NameText>{name}</NameText>
                    </NameArea>
                    <TextArea>
                        <Image src={textImage} />
                        <Text>{word}</Text>
                        <NextButton onClick={handleNextButtonClick}>
                            <Image src={nameImage} />
                            <NameText >Next</NameText>
                        </NextButton>
                    </TextArea>
                </DialogueArea>}
            {type === choiceType &&
                generateChoices()
            }
        </div>
    )
}

const LogButton = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 5%;
    border-radius: 50%;
    &:hover {
        cursor: pointer;
      }
`

const NextButton = styled.div`
    right: 0;
    bottom: 0;
    position: absolute;
    width: 15%;
    &:hover {
        cursor: pointer;
        color: gray;
      }
`
const ChoiceArea = styled.div`
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
`

const Choice = styled.div`
    text-align: center;
    position: relative;
    display: block;
    font-size: 1.2em;
    &:hover {
        cursor: pointer;
        color: gray;
    }
`

const DialogueArea = styled.div`
    bottom: 0%;
    text-align: center;
    position: fixed;
`
const NameArea = styled.div`
    position: relative;
    text-align: center;
    margin-left: 20%;
    display: block;
    width: 10%;
`

const ChoiceText = styled.p`
font-size: 1.2em;
margin: 0em;
position: absolute;
transform: translate(-50%, -50%);
top: 50%;
left: 50%;
width: 80%;   
`

const NameText = styled.h1`
    font-size: 1.5em;
    margin: 0em;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`;

const TextArea = styled.div`
    position: relative;
    text-align: center;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    
`

const Text = styled.div`
    font-size: 1.5em;
    margin: 0em;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 80%;
`;



export default Game