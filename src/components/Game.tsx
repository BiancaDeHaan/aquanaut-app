import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import router, { useRouter } from 'next/router'
import styled from 'styled-components'
import { useTypingText } from '../app/useTypingTest';
import HomeDialog from './AlertDialog';
import textImage from '../../public/bubble.png';
import nameImage from '../../public/name.png';
import logImage from '../../public/log.png';

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

    const { word } = useTypingText(
        text,
        50
    );


    function handleNextButtonClick() {
        console.log(queue);
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
            console.log("End of story");
        }
    }

    function handleLogButtonClick() {

    }

    function handleChoiceClick(data: Data[]) {
        var value = data;
        value.concat(queue);
        setQueue(value);
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
    }, []);

    useEffect(() => {
        console.log("UPDATE");
        console.log(queue);
        if (queue) handleNextButtonClick();
        console.log(queue);
    }, [queue]);

    function generateChoices() {
        const choices = props.story[index].choices.map((choice, num) =>
            <Choice onClick={() => handleChoiceClick(props.story[index].responses[num])} key={num}>{choice}</Choice>);

        return (
            <div>{choices}</div>
        )
    }

    return (
        <div>
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
                        <NextButton>
                            <Image src={nameImage} onClick={handleNextButtonClick} />
                            <NameText>Next</NameText>
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
const Choice = styled.button`
text-align: center;
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

const Text = styled.p`
    font-size: 1.5em;
    margin: 0em;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`;



export default Game