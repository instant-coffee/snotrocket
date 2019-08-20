import React from "react"
import scoreBlock from "./scoreBlock.module.css";

class ScoreValue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: this.props.percentage,
      score: "",
      isVisable: false,
    }
  }

  formatP(p) {
    return `${p}%`
  }

  toggleScoreValue(value) {
    this.state.score === value ? this.setState({score: ""}) : this.setState({score: value})
  }

  render() {
    return (
      <div className={scoreBlock.container__score} onClick={ () => this.toggleScoreValue("WAA") }>
        <div className={scoreBlock.title}>{ this.props.title }</div>
        <div className={scoreBlock.percentage}>{ this.formatP(this.state.percentage) }</div>
        <div className={scoreBlock.scoreValue}>{ this.state.score }</div>
      </div>
    )
  }
}

export default ScoreValue