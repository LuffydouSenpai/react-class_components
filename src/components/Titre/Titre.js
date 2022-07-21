import React, { Component } from 'react'
import './Titre.css'

class Titre extends React.Component{
    constructor(props){
        super(props);
      }
    parametre1 ="Il fait beau"  
    render(){
        return <h1>{this.parametre1}</h1>
    }
}

export default Titre;