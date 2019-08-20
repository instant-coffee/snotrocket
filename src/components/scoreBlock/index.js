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
          return this.zoneCalcA(percentage)
        break;
      case "zone7b":
          return this.zoneCalcB(percentage)
        break;
      case "zone6a":
          return this.zoneCalcA(percentage)
        break;
      case "zone6b":
          return this.zoneCalcB(percentage)
        break;
      case "zone5a":
        return this.zoneCalcA(percentage)
        break;
      case "zone5b":
          return this.zoneCalcB(percentage)
        break;
      case "zone4a":
          return this.zoneCalcA(percentage)
        break;
      case "zone4b":
          return this.zoneCalcB(percentage)
        break;
      default:
        break;
    }
  }

  zoneCalcA = (percentage) => {
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

  zoneCalcB = (percentage) => {
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