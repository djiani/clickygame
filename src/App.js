import React from "react";
import Header from "./components/Header";
 import Game from './components/Game';
import API from './components/utils/API';
import Footer from './components/Footer';


import  './App.css';

class App extends React.Component{
    state = {
        Characters:[], 
        score:0,
        topScore:0,
        CharactersClick: [],
        gameDesc:"",
        error : false,
        level: 1


    }

    GetGiphy = (level) => {
        API.search(level*2)
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
                error : false,
                level: level
                });
          })
          .catch(err => console.log(err));
    };

    handleImageClick = (e)=>{
        let {score, topScore, Characters, CharactersClick, gameDesc, error, level} = this.state;
        const curElt = (e.target.src);
        if(!CharactersClick.includes(curElt)){
            CharactersClick.push(curElt);
           score++;
           gameDesc = "You guessed Correctely!";
           error = false;
           if(score > topScore){
               topScore = score;
           }
           if(score === this.state.Characters.length){
               //win game increase level!
               alert('you complete level '+level+"! Go to the next level");
               level++;
               this.GetGiphy(level);
           }else{
                Characters = this.shuffeArray();
                this.setState({Characters, score, topScore, CharactersClick, gameDesc, error});
           }
            
           
        }else{
            score = 0;
            gameDesc = "You guessed Incorrectly!";
            error = true;
            CharactersClick = [];
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
        this.GetGiphy(this.state.level);
    }

    handleCliclyGame = ()=>{
        this.GetGiphy(1);
    }

    render(){
        return (
            <div className="main">
                 <Header 
                    score={this.state.score} 
                    topScore = {this.state.topScore}
                    desc={this.state.gameDesc} 
                    error={this.state.error}
                    level={this.state.level}
                    onClick={this.handleCliclyGame}
                 />
                 <Game  CharactersData={this.state.Characters} click={this.handleImageClick}/>
                 <Footer/>
            </div>
             
         );
    }
}

export default App;




