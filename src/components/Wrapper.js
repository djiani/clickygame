import React from "react";
import Header from "./Header";
import DescriptionHeader from './DescriptionHeader';
import  './Wrapper.css';

function Wrapper(props){
    return (
       <div className="main">
            <Header/>
            <DescriptionHeader />
            
            <div>Image rendering</div>

        </div>
        
    );
}

export default Wrapper;