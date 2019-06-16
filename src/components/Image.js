import React from 'react';


function Image(props){
    return (
        <img src={props.img_url}   className="thumbnail" alt=" image game"/>
    );
}

export default Image;