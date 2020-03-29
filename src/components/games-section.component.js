import React from 'react';
import GameComponent from './game.component';

function GamesSection() {
    const games = [
        {
            name: "PUBG: Mobile",
            image: "https://cdn.gamingmonk.com/home-page/games/pubg-mobile.png"
        },
        {
            name: "Freefire",
            image: "https://cdn.gamingmonk.com/home-page/games/freefire.png"
        },
        {
            name: "Clash Royale",
            image: "https://cdn.gamingmonk.com/home-page/games/clash-royale.png"
        },
        {
            name: "Fortnite",
            image: "https://cdn.gamingmonk.com/home-page/games/fortnite.png"
        },
        {
            name: "8 Ball Pool",
            image: "https://cdn.gamingmonk.com/home-page/games/8-ball-pool.png"
        },
        {
            name: "PUBG: Mobile",
            image: "https://cdn.gamingmonk.com/home-page/games/pubg-mobile.png"
        }
    ];

    return (
        <section className="jsx-3835746249 games-section my-1">
            <div className="jsx-3835746249 container py-5">
                <h3 style={{ color: '#0d0d0d' }} className="jsx-3835746249 games-section-title text-uppercase">
                    Games</h3>
                <div className="jsx-771728816 row">
                    <div className="jsx-771728816 col d-flex justify-content-between align-items-center" />
                </div>
                <div className="jsx-771728816 wrapper row">
                    <div className="jsx-771728816 position-relative w-100">
                        <div className="jsx-771728816 col d-flex flex-nowrap h-scroll">
                            {
                                games.map((game) => <GameComponent game={game} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GamesSection;