import React, { Component } from 'react'
import Titre from './components/Titre/Titre';
import BoutonCount from './components/BoutonCount/BoutonCount';
import './App.css';

/* Component de type function avec props intégrés en parametre
function App (props){
  return <div>Hello World</div>  
} */

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }
  // déclaration de propriété(variable)
  parametre1 ="Hello World"
  handleClick(){
    console.log("Bonjour")
  }
  handleClickCount(e){
    if(e){
      let countTmp = this.state.count +1;
      this.setState({count:countTmp})
    }else{
      let countTmp = this.state.count -1;
      this.setState({count:countTmp})      
    }
  }
  //déclaration de methode(fonction)
  render(){
    // le mot clé this designe la class elle meme (ici app)
    // et est obligatoire pour appeler une propriété ou une methode
    //dans cette class
       return <div onClick={() => {this.handleClick()}}>
        <Titre/>
        {this.parametre1}
        <div>{this.state.count}</div>
        <BoutonCount action={()=>{this.handleClickCount(true)}}>+1</BoutonCount>
        <BoutonCount action={()=>{this.handleClickCount(false)}}>-1</BoutonCount>
        </div> 
  }
}
  
function ouverture(){
  console.log("ouverture")
}
const div = document.createElement("div")
div.id = "divTest"
div.innerHTML = "TEST"


export default App;
