import React from 'react';
import "./Image.css";


function Image(props){
    
    return (
        <img src={props.img_url}   className=" img-thumbnail imageStyle animated jello " alt={props.img_url} onClick={props.onClick} />
    );
}

export default Image;