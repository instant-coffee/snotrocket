import React from "react"
import scoreBlock from "./scoreBlock.module.css";

const formatP = p => (p >= 0) ?  `${p}%` : "0%"

class ScoreValue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: this.props.percentage,
      score: "",
      isVisable: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ percentage: nextProps.percentage });  
  }

  toggleScoreValue( tValue, pValue ) {
    let newValue = this.whatIsScore(tValue, pValue)
    this.state.score === newValue ? this.setState({score: ""}) : this.setState({score: newValue})
  }

  whatIsScore = ( time, percentage ) => {
    console.log("time", time)
    switch (time) {
      case "zone7a":
          return this.zoneCalc7A(percentage)
        break;
      case "zone7b":
          return this.zoneCalc7B(percentage)
        break;
      case "zone6a":
          return this.zoneCalc6A(percentage)
        break;
      case "zone6b":
          return this.zoneCalc6B(percentage)
        break;
      case "zone5a":
        return this.zoneCalc5A(percentage)
        break;
      case "zone5b":
          return this.zoneCalc5B(percentage)
        break;
      case "zone4a":
          return this.zoneCalc4A(percentage)
        break;
      case "zone4b":
          return this.zoneCalc4B(percentage)
        break;
      default:
        break;
    }
  }

  zoneCalc7A = (percentage) => {
    if ( ( percentage <= 5 ) && ( percentage <= 14) ){
      return "WAA"
    } else if ( ( percentage >= 15 ) && (percentage <= 21 ) ) {
      return "AA"
    } else if ( (percentage > 22 ) && (percentage <= 30 ) ) {
      return "A"
    } else if ( ( percentage > 31 ) && (percentage <= 40 ) ) {
      return "BA"
    } else if ( ( percentage > 41 ) ) {
      return "WBA"
    } else {
      return ""
    } 
  }

  zoneCalc7B = (percentage) => {
    if ( (percentage <= 8 ) && (percentage <= 19) ){
      return "WAA"
    } else if ( ( percentage >= 20 ) && ( percentage <= 34 ) ) {
      return "AA"
    } else if ( ( percentage > 35 ) && ( percentage <= 46 ) ) {
      return "A"
    } else if ( ( percentage > 47 ) && ( percentage <= 60 ) ) {
      return "BA"
    } else if ( ( percentage > 61 ) ) {
      return "WBA"
    } else {
      return ""
    } 
  }

  zoneCalc6A = (percentage) => {
    if ( (percentage <= 5 ) && (percentage <= 9) ){
      return "WAA"
    } else if ( ( percentage >= 10 ) && ( percentage <= 20 ) ) {
      return "AA"
    } else if ( ( percentage > 21 ) && ( percentage <= 24 ) ) {
      return "A"
    } else if ( ( percentage > 25 ) && ( percentage <= 30 ) ) {
      return "BA"
    } else if ( ( percentage > 31 ) ) {
      return "WBA"
    } else {
      return ""
    } 
  }

  zoneCalc6B = (percentage) => {
    if ( (percentage <= 8 ) && (percentage <= 14) ){
      return "WAA"
    } else if ( ( percentage >= 15 ) && ( percentage <= 22 ) ) {
      return "AA"
    } else if ( ( percentage > 23 ) && ( percentage <= 35 ) ) {
      return "A"
    } else if ( ( percentage > 36 ) && ( percentage <= 50 ) ) {
      return "BA"
    } else if ( ( percentage > 51 ) ) {
      return "WBA"
    } else {
      return ""
    } 
  }

  zoneCalc5A = (percentage) => {
    if ( (percentage <= 4 ) && (percentage <= 7) ){
      return "AA"
    } else if ( ( percentage >= 8 ) && ( percentage <= 14 ) ) {
      return "A"
    } else if ( ( percentage > 15 ) ) {
      return "BA"
    } else {
      return ""
    } 
  }

  zoneCalc5B = (percentage) => {
    if ( (percentage <= 10 ) && (percentage <= 17) ){
      return "AA"
    } else if ( ( percentage >= 18 ) && ( percentage <= 23 ) ) {
      return "A"
    } else if ( ( percentage > 24 ) ) {
      return "BA"
    } else {
      return ""
    } 
  }

  zoneCalc4A = (percentage) => {
    if ( (percentage <= 2 ) && (percentage <= 4) ){
      return "AA"
    } else if ( ( percentage >= 5 ) && ( percentage <= 6 ) ) {
      return "A"
    } else if ( ( percentage > 7 ) ) {
      return "BA"
    } else {
      return ""
    } 
  }

  zoneCalc4B = (percentage) => {
    if ( (percentage <= 5 ) && (percentage <= 7) ){
      return "AA"
    } else if ( ( percentage >= 8 ) && ( percentage <= 14 ) ) {
      return "A"
    } else if ( ( percentage > 15 ) ) {
      return "BA"
    } else {
      return ""
    } 
  }

  render() {
    return (
      <div className={scoreBlock.container__score} onClick={ () => this.toggleScoreValue( this.props.time, this.state.percentage) }>
        <div className={scoreBlock.title}>{ this.props.title }</div>
        <div className={scoreBlock.percentage}>{ formatP(this.state.percentage) }</div>
        <div className={scoreBlock.scoreValue}>{ this.state.score }</div>
      </div>
    )
  }
}

export default ScoreValue