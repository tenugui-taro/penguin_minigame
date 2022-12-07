import { PlayArea } from "../PlayArea/PlayArea";
import { ScoreBar } from "../ScoreBar/ScoreBar";

export const GameController = (): JSX.Element => {
  return (
    <>
      <ScoreBar></ScoreBar>
      <PlayArea></PlayArea>
    </>
  );
};
