import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, setBotArmy, botArmy }) {
  function handleAddArmy(bot) {
    setBotArmy([...botArmy, bot]);
    console.log(botArmy);
  }

  function handleDelete(id) {
    fetch(`http://localhost:4000/bots/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bot");
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
        console.log(id);
      })
      .catch((error) => {
        console.error("Error deleting bot:", error);
      });
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => handleAddArmy(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini black button"
                onClick={() => handleDelete(bot.id)}
              >
                delete
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
