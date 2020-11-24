import React from "react";
import { Container } from "react-bootstrap";
import Team from "./components/Team";
import { PlayerProvider, usePlayerContext } from "./contexts/PlayerContext";
import "./styles.css";

export default (props) => {
  return (
    <Container>
      <PlayerProvider>
        <PlayerTeam/>
      </PlayerProvider>
    </Container>
  );
}

const PlayerTeam = ({...props}) => {
  const playerContext = usePlayerContext();

  return (
    <Team team={getTeam("default", playerContext)}/>
  );
}

const getTeam = (teamId, playerContext) => ({
  id: teamId, ...playerContext.player.teams[teamId]
});