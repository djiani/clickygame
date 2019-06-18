import React from "react";
import Header from "./components/Header";
import DescriptionHeader from './components/DescriptionHeader';
 import Game from './components/Game';
import API from './components/utils/API';


import  './App.css';

class App extends React.Component{
    state = {
        Characters:[], 
        score:0,
        topScore:0,
        CharactersClick: [],
        gameDesc:"",
        error : false


    }

    GetGiphy = () => {
        API.search()
          .then(res => {
            //console.log(res);
            const Characters = res.data.data.map( data=>{
                return data.images.fixed_height_still.url
            })

            this.setState({ 
                Characters: Characters,
                score:0,
                topScore:0,
                CharactersClick: [],
                gameDesc:"",
                error : false
                });
          })
          .catch(err => console.log(err));
    };

    handleImageClick = (e)=>{
        let {score, topScore, Characters, CharactersClick, gameDesc, error} = this.state;
        const curElt = (e.target.src);
        if(!CharactersClick.includes(curElt)){
            CharactersClick.push(curElt);
           score++;
           gameDesc = "You guessed Correctely!";
           error = false;
           if(score > topScore){
               topScore = score;
           }
            Characters = this.shuffeArray();
        
            this.setState({Characters, score, topScore, CharactersClick, gameDesc, error});
           
        }else{
            score = 0;
            gameDesc = "You guessed Incorrectly!";
            error = true;
            this.setState({Characters, score, topScore, CharactersClick, gameDesc, error});
        }
    }

    shuffeArray = ()=>{
        const newArr = this.state.Characters.slice();
        const shuffeArr = [];
        while(newArr.length > 0){
            let indexToPush = Math.random()*newArr.length;
            let eltRemove = newArr.splice(indexToPush, 1);
            shuffeArr.push(eltRemove[0]);
        }

        return shuffeArr;
    }

    componentDidMount(){
        this.GetGiphy();
    }

    handleCliclyGame = ()=>{
        this.GetGiphy();
    }

    render(){
        return (
            <div className="main">
                 <Header 
                    score={this.state.score} 
                    topScore = {this.state.topScore}
                    desc={this.state.gameDesc} 
                    error={this.state.error}
                    onClick={this.handleCliclyGame}
                 />
                 <DescriptionHeader  />
                 <Game  CharactersData={this.state.Characters} click={this.handleImageClick}/>
            </div>
             
         );
    }
}

export default App;




