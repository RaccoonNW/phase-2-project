import React from "react";
import {NavLink} from 'react-router-dom'

function Welcome() {
    return (
        <div className="welcomeDiv">
            <NavLink
                to='/game'
                exact
                className='welcomeLinks'
            >
                Game
            </NavLink>
            <NavLink
                to='/saves'
                exact
                className='welcomeLinks'
            >
                Saves
            </NavLink>
        </div>
    )
}

export default Welcome