import React from 'react';
import "./Header.css"

function Header(props){
    let description = ""
    if(props.desc !==""){
        if(props.error){
            description = <div className="d-inline-flex game_des error animated bounce"> {props.desc}</div>
        }else{
            description = <div className="d-inline-flex game_des noerror animated bounce"> {props.desc}</div>
        }
    }else{
        description = "click an image to begin!"
    }

    return (
        <div className="header">
            <div className="container">
                <div className="d-inline-flex game_startBtn" onClick={props.onClick}><button className="btn btn-danger">clikyGame</button></div>
                {description}
                <div className="d-inline-flex game_score">
                    <p>Score:<span>{props.score}</span> | Top Score:<span>{props.topScore}</span></p> 
                </div>
            </div>
           
        </div>
    )
}
export default Header;