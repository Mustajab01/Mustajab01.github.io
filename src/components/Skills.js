import React, { useState } from 'react';
import Languages from './Languages';
import Tools from './Tools';

const Skills = () => {
    const [cardType, setCardType] = useState('languages');

    const showCard = (type) => {
        setCardType(type);
    };

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="navbar">
                <button id="languages-btn" onClick={() => showCard('languages')}>Languages</button>
                <button id="tools-btn" onClick={() => showCard('tools')}>Tools</button>
            </div>
            <div className="skills-content">
                {cardType === 'languages' ? <Languages /> : <Tools />}
            </div>
        </section>
    );
}

export default Skills;