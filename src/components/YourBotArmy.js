import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy }) {
  const army = Array.isArray(botArmy) ? botArmy : [];

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h2>Your Bot Army</h2>
          {army.map(bot => (
            <BotCard key={bot.id} bot={bot} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
