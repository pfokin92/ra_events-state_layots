import React from "react";
import  PropTypes  from "prop-types";

export default function IconSwitch( {icon, onSwitch} ) {
    return (
        <div className="IconSwitch">
            <div className="IconSwitch-button" onClick={onSwitch}>
                <span className="material-icons">{icon}</span>
            </div>
        </div>
    );
}

IconSwitch.protoTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
}