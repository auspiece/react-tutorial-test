import React from 'react'; //rfc ile shortcut oluşturma

import PropTypes from "prop-types";

function NavBar(props){
    return(
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

NavBar.propTypes = {
    title : PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title : "Default App"
}

export default NavBar;