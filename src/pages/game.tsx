import styled from "styled-components";
import useSWR from "swr";
import Game from "../components/Game";
import { useEffect, useState } from "react";
import { EndGame } from "../components/EndGame";

const fetcher = (url) => fetch(url).then((res) => res.json());

function GamePage() {
  function useChapter(chapterID: number) {
    const { data, error } = useSWR(
      `/api/staticdata/?query=${chapterID}`,
      fetcher
    );

    return {
      data: data,
      error: error,
    };
  }

  function useLog() {
    const { data, error } = useSWR(`/api/staticdata/?query=log`, fetcher);

    return {
      logdata: data,
      logerror: error,
    };
  }

  function nextChapter() {
    setChapter(chapter + 1);
    localStorage.setItem("chapter", JSON.stringify(chapter + 1));
  }

  const [chapter, setChapter] = useState<number>(1);
  const { data, error } = useChapter(chapter);
  const { logdata, logerror } = useLog();

  useEffect(() => {
    const history = localStorage.getItem("chapter");
    if (history !== null) setChapter(JSON.parse(history));
  }, []);

  //Handle the error state
  if (error || logerror) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data || !logdata) return <div>Loading...</div>;

  if (data.state === "game_over")
    return (
      <div>
        <EndGame />
      </div>
    );

  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <Game
      story={JSON.parse(data).story}
      character={JSON.parse(data).character}
      background={JSON.parse(data).background}
      nextChapter={nextChapter}
      chapter={chapter}
      log={JSON.parse(logdata).entries}
      height={JSON.parse(data).height}
    />
  );
}

export default GamePage;
