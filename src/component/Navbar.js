import React, { Fragment } from "react";
import logoReactSmall from '../images/logo-react-small.png';

export default function Navbar(){
    return(
        <Fragment>
            <nav>
                <img
                src={logoReactSmall}
                alt='logoReactSmall'
                className="nav--logo"
                >
                </img>
                <h3 className="nav--logo-text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </Fragment>
    );


};