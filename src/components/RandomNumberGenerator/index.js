// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickGenerateButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="heading">Random Number</h1>
          <p className="range">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onClickGenerateButton}
            className="button"
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
