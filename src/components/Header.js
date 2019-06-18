import React from 'react';
import "./Header.css"

function Header(props){
    let description = ""
    if(props.desc !==""){
        if(props.error){
            description = <p className="d-inline-flex game_des error animated bounce delay-2s"> {props.desc}</p>
        }else{
            description = <p className="d-inline-flex game_des noerror animated bounce delay-2s"> {props.desc}</p>
        }
    }else{
        description =(<>
            <h5>Could Remember all your privious Click?</h5>
            <p>Click on a image to earn points! Don't click to an image more than Once!</p>
            </>
        ) ;
    }

    return (
        <div className="header">
            <div className="row">
                <div className="col-12 col-sm-6 game_startBtn" onClick={props.onClick}>
                    <h3 className="band">Cliky Game</h3>
                </div>
                
                <div className="col-12 col-sm-6 game_score">
                    <h3>Score: <span className="badge badge-info">{props.score}</span> | 
                        Top Score: <span className="badge badge-danger">{props.topScore}</span> | 
                        Level: <span className="badge badge-danger">{props.level}</span></h3> 
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12 game_desc">
                    {description}
                </div>
                    
            </div>
           
        </div>
    )
}
export default Header;