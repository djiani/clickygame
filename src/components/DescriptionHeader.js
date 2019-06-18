import React from 'react';
import './DescriptionHeader.css';

function DescriptionHeader(props){
    return (
        <div className="jumbotron text-center">
            <div className="container">
                <h1> Clicky Game! </h1>
                <p>Click on a image to earn points! Don't click to an image morer than Once!</p>
            </div>
        </div>
    )
}

export default DescriptionHeader;