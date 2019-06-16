import React from 'react';
import "./Header.css"

function Header(props){
    return (
        <div className="header">
            <div className="container">
                <div className="d-inline-flex game_startBtn"><button className="btn btn-danger">clikyGame</button></div>
                <div className="d-inline-flex game_des">click an image to begin!</div>
                <div className="d-inline-flex game_score">
                    <p>Score:<span>0</span> | Top Score:<span>0</span></p> 
                </div>
            </div>
           
        </div>
    )
}
export default Header;