import styled from 'styled-components'
import type { NextPage } from 'next'
import useSWR from 'swr';
import Game from '../components/Game';
import { useEffect, useState } from 'react';
import router from 'next/router';
import { EndGame } from '../components/EndGame';

const fetcher = (url) => fetch(url).then((res) => res.json());

function GamePage() {

  function useChapter (chapterID : number) {
    const { data, error } = useSWR(`/api/staticdata/?query=${chapterID}`, fetcher)

    return {
      data: data,
      error: error
    }
  }

  function nextChapter() {
    setChapter(chapter+1);
    localStorage.setItem('chapter', JSON.stringify(chapter+1));
  }

  const [chapter, setChapter] = useState<number>(1);
  const { data, error } = useChapter(chapter);

  useEffect(() => {
      const history = localStorage.getItem('chapter');
      if (history !== null) setChapter(JSON.parse(history));
  }, []);
  

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  if(data.state === "game_over") return <div>
    <EndGame/>
  </div>;
  
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
      <Game story={JSON.parse(data).story} nextChapter={nextChapter} chapter={chapter}/>
    </div>
  );
}

export default GamePage

const Box = styled.div`
    width: 60%;
    margin: 5em auto;
    text-align: center;
`