import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  randomNumberChange = () => {
    const newRandomNum = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a Random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.randomNumberChange}
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
