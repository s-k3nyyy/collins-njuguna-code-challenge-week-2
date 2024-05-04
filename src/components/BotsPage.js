// BotsPage.js

import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [enlistedClasses, setEnlistedClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((resp) => resp.json())
      .then((data) => setBots(data));
  }, []);

  const handleAddArmy = (bot) => {
    if (!enlistedClasses.includes(bot.bot_class)) {
      setBotArmy([...botArmy, bot]);
      setEnlistedClasses([...enlistedClasses, bot.bot_class]);
    }
  };

  const handleDelete = (id) => {
    const updatedBotArmy = botArmy.filter((bot) => bot.id !== id);
    setBotArmy(updatedBotArmy);
    const bot = bots.find((bot) => bot.id === id);
    const updatedEnlistedClasses = enlistedClasses.filter(
      (className) => className !== bot.bot_class
    );
    setEnlistedClasses(updatedEnlistedClasses);
  };

  return (
    <div>
      <YourBotArmy botArmy={botArmy} />
      <BotCollection
        bots={bots}
        setBotArmy={setBotArmy}
        botArmy={botArmy}
        handleAddArmy={handleAddArmy}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default BotsPage;
