import React from 'react';

function GameComponent({ game }) {
    return (
        <div className="jsx-771728816 mr-4">
            <a className="jsx-3664901464">
                <div className="jsx-3664901464 game-card">
                    <img alt="game" src={game.image} alt={game.name} className="jsx-3664901464 game-img" />
                    <div className="jsx-3664901464 color-box">
                        <span className="jsx-3664901464 game-name">{game.name}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default GameComponent;