import React from "react";
import Header from "./Header";
import DescriptionHeader from './DescriptionHeader';
// import Game from './Game';

import  './Wrapper.css';

class Wrapper extends React.Component{
    state = {
        imageGame:[]

    }

    render(){
        return (
            <div className="main">
                 <Header/>
                 <DescriptionHeader />
                 {/* <Game  /> */}
            </div>
             
         );
    }
}

export default Wrapper;