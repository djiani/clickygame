import React from 'react';
import Image from './Image';


function Game(props){
    const imageGame = props.map(function(img_url){
        return <Image img_url={img_url} />
    })

    return (
        <div className="container">
            {imageGame}
        </div>
    );
}

export default Game;