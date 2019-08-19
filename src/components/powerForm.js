import React from "react"
import "./form.css"

const calculateVariance = (baseline, power, fpValue)  => {
  let difference = baseline - power
  let percentage = Math.floor( (difference / baseline) * 100 )
  return {[fpValue]: percentage} 
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
    let fpValue = (e.target.name === "valueB") ? "b" : "c"
    this.setState(calculateVariance(this.state.valueA, power, fpValue))
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
                {this.props.powerLables[0]}
                <input 
                  type="text" 
                  name="valueA" 
                  onChange={ this.onChange }/>
                </label>
                <label>
                {this.props.powerLables[1]}
                <input 
                type="text" 
                name="valueB" 
                onChange={ this.onChange }/>
                </label>
                <label>
                {this.props.powerLables[2]}
                <input 
                type="text" 
                name="valueC" 
                onChange={ this.onChange }/>
                </label>
              </div>
              <div className="container__fatigue-values">
                <h3 className="title">Fatigue Percentage</h3>
                <h3 className="fatigue-percentage">{this.state.fatigueVarienceA}</h3>
                <h3 className="fatigue-percentage">{this.state.fatigueVarienceB}</h3>
              </div>
            </div>
          </div>
        <div className="fatigue-percentage">FATIGUE PROFILE A:{this.state.valueA}</div>
        <div className="fatigue-percentage">FATIGUE PROFILE B:{this.state.fatigueVarienceA}</div>
        <div className="fatigue-percentage">FATIGUE PROFILE C:{this.state.fatigueVarienceB}</div>
      </form>
    );
  }
}

export default PowerForm