import React from "react";
import { Link } from "react-router-dom";
import BotCard from "./BotCard";

function BotCollection({ bots, setBotArmy, botArmy }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {bots &&
          bots.map((bot) => {
            return (
              <Link to={`/bots/${bot.id}`} key={bot.id}>

                <BotCard
                  id={bot.id}
                  bot={bot}
                  setBotArmy={setBotArmy}
                  botArmy={botArmy}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default BotCollection;
