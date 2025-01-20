import React from "react";
import PlayerCard from "../Components/PlayerCard";
import PlayerData from "../Components/playerData";

const PlayerList = () => {
  

  return (
    <div className="row" style={{margin:'1rem'}}>
      {PlayerData.map((player) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{marginBottom:'1rem'}} >
          <PlayerCard 
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            img={player.img}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
