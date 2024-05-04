import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const botTypeClasses = {
  Assault: 'icon military',
  Defender: 'icon shield',
  Support: 'icon plus circle',
  Medic: 'icon ambulance',
  Witch: 'icon magic',
  Captain: 'icon star',
};

function BotSpecs() {
  const { botId } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/bots/${botId}`)
      .then((response) => response.json())
      .then((data) => setBot(data))
      .catch((error) => console.error('Error fetching bot:', error));
  }, [botId]);

  if (!bot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="Bot Avatar"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() => console.log('Go Back')}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() => console.log('Enlist')}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
