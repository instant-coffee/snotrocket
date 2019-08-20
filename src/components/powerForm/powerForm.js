import React from "react"
import "./form.css"
import ScoreValue from "../scoreBlock/index"

const calculateVariance = (baseline, power, fpValue)  => {
  let difference = baseline - power
  let percentage = Math.floor( (difference / baseline) * 100 )
  let vv = (fpValue === "valueB") ? "fatigueVarienceA" : "fatigueVarienceB"
  return {[vv]: percentage} 
}

class PowerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueA: 0,
      valueB: 0,
      valueC: 0,
      fatigueVarienceA: 0,
      fatigueVarienceB: 0
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    let power = e.target.value
    let newState = calculateVariance(this.state.valueA, power, e.target.name)
    this.setState(newState)
  }

  render() {
    return (
      <form onSubmit={this.calculateFatigue}>
        <div className={`container__zone ${this.props.zone}`}>
          <h2 className="zone-title">{this.props.zone}</h2>
            <div className="container__power">
            <div className="container__power-inputs">
            <h3 className="title">Power</h3>
                <label>
                {this.props.powerLabels[0]}
                <input 
                  type="text" 
                  name="valueA" 
                  onChange={ this.onChange }/>
                </label>
                <label>
                {this.props.powerLabels[1]}
                <input 
                type="text" 
                name="valueB" 
                onChange={ this.onChange }/>
                </label>
                <label>
                {this.props.powerLabels[2]}
                <input 
                type="text" 
                name="valueC" 
                onChange={ this.onChange }/>
                </label>
              </div>
              <div className="container__fatigue-values">
                <h3 className="title fatigue-title">Fatigue Percentage</h3>
                <ScoreValue percentage={this.state.fatigueVarienceA} title="5 second fatigue" />
                <ScoreValue percentage={this.state.fatigueVarienceB} title="10 second fatigue" />
              </div>
            </div>
          </div>
      </form>
    );
  }
}

export default PowerForm