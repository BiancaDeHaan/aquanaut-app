// File for the slow-typing effect 

import { useEffect, useRef, useState } from "react";

// Source: https://letsbuildui.dev/articles/a-typing-text-effect-with-react-hooks 

export const useTypingText = (
  words: string,
  keySpeed: number = 100,
) => {

  const [currentWord, setCurrentWord] = useState('');
  const [newWord, setNewWord] = useState<string>('');
  const typingInterval = useRef<NodeJS.Timer>();
  const letterIndex = useRef<number>(0);

  useEffect(() => {
    const typeLetter = () => {
      if (!words) return;

      if (letterIndex.current >= words.length) { return; }

      if (letterIndex.current === undefined) letterIndex.current = 0;

      const segment = words.split('');
      setCurrentWord(currentWord.concat(segment[letterIndex.current]));
      letterIndex.current = letterIndex.current + 1;
    }

    typingInterval.current = setInterval(() => {
      typeLetter();
    }, keySpeed);

    return () => {
      clearInterval(typingInterval.current);
    };
  }, [currentWord, keySpeed, words]);

  useEffect(() => {
    console.log("Changing word!");
    if (words !== newWord) {
      letterIndex.current = 0;
      setCurrentWord('');
      setNewWord(words);

      console.log("testing");
      console.log(words);
      console.log(currentWord);


    }
  }, [words])

  return {
    word: (
      <span>{currentWord.length ? currentWord : '0'}</span>
    ),
  };
}