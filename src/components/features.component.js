import React from 'react';
import FeatureSection from './feature-section.component';

function Features({ features }) {
    return (
        <section className="jsx-3718240701">
            {
                features.map((feature) => <FeatureSection feature={feature} />)
            }
        </section>
    )
}

export default Features;