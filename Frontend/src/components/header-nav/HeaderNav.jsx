import React from 'react';
import {NavLink} from "react-router-dom";

function HeaderNav() {
    return (
        <header>
            <ul>
                <NavLink to="/dashboard">Create your license</NavLink>
            </ul>
        </header>
    )
}

export default HeaderNav;