import React from 'react';

function FeatureSection({ feature }) {
    const className = feature.reverse ? "jsx-3718240701 col-md-6" : "jsx-3718240701 col-md-6 order-md-1";

    return (
        <div className="jsx-3718240701 feature">
            <div className="jsx-3718240701 container">
                <div className="jsx-3718240701 row py-5 my-1">
                    <div className={className}>
                        <img alt="gameplex app" src={feature.image} className="jsx-3718240701 w-100" />
                    </div>
                    <div className="jsx-3718240701 desc col-md-6">
                        <h3 className="jsx-3718240701 feature-heading my-3">{feature.name}</h3>
                        <p className="jsx-3718240701 feature-desc">{feature.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;
