import React from 'react';
import './SeasonDisplay.css'


const seasonConfig = {
    summer: {
        text:'let us go to the beach',
        iconName:'sun'
    },
    winter:{
        text:'it is too cold!',
        iconName:'snowflake'
    }
}


const seasonCalc = (lat, month) => {
    if (month > 2 && month < 9) {
        return (lat > 0) ? 'summer' : 'winter'
    } else {
        return (lat > 0) ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = seasonCalc(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season];
    return (<div className={`season-display ${season}`}>
        <i className={`${iconName} icon massive icon-left`}/>
        <h1>{text}</h1>
        <i className={`${iconName} icon massive icon-right`}/>
    </div>);
}

export default SeasonDisplay;