import React from 'react';
import Image from './Image';
import './Game.css';


function Game(props){
    const CharactersList = props.CharactersData.map(function(img_url, index){
    return <Image img_url={img_url} onClick={props.click} key={index}  />
    })

    return (
        <div className="container">
            <div className="game">
                {CharactersList}
            </div>
            
        </div>
    );
}

export default Game;