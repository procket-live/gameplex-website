import React from 'react';
import FeatureSection from './feature-section.component';

function Features() {
    const features = [
        {
            name: "PLAY AND EARN",
            description: "Play competitive tournaments and win amazing cash prizes instantly! Join any of the multiple tournaments happening every hour, every day.",
            image: "https://cdn.gamingmonk.com/home-page/features/play.png",
            reverse: false
        },
        {
            name: "WATCH",
            description: "Watch your favourite streamers and interact with them. Get a chance to win amazing cash prizes as well.",
            image: "https://cdn.gamingmonk.com/home-page/features/watch.png",
            reverse: true
        },
        {
            name: "CHAT",
            description: "With our live chat feature, talk to other gamers and socialise with them. Find like-minded gamers and play together!",
            image: "https://cdn.gamingmonk.com/home-page/features/chat.png",
            reverse: false
        },
        {
            name: "DISCOVER",
            description: "Discover tips &amp; tricks, latest news about your favorite games. Stay updated and use the knowledge to grow your skills.",
            image: "https://cdn.gamingmonk.com/home-page/features/discover.png",
            reverse: true
        }
    ]
    return (
        <section className="jsx-3718240701">
            {
                features.map((feature) => <FeatureSection feature={feature} />)
            }
        </section>
    )
}

export default Features;