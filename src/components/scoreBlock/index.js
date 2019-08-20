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

    if (percentage <= 5){
      return "WAA"
    } else if ( (percentage > 5 ) && (percentage <= 10) ) {
      return "AA"
    }
    else {
      return "WBA"
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