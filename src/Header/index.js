import React from "react"
import "./style.css"

const Header = (props) => (
    <header>
        <h1 className="header">{props.title}</h1>
    </header>
);

export default Header;