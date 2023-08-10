// Write your code here
import {Component} from 'react'
import './index.css'

const initialState = {
  timeElapsed: 0,
}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => clearInterval(this.timerId)

  tick = () => {
    this.setState(prevState => ({
      timeElapsed: prevState.timeElapsed + 1,
    }))
    console.log('ticking')
  }

  onStartTimer = () => {
    console.log('timer Started')
    this.timerId = setInterval(this.tick, 1000)
  }

  onStopTimer = () => {
    console.log('timer stopped')
    this.clearTimeInterval()
  }

  onResetTimer = () => {
    console.log('timer reset')
    this.clearTimeInterval()
    this.setState(initialState)
  }

  getStringifiedTimeFormat = () => {
    const {timeElapsed} = this.state

    const minutes = Math.floor(timeElapsed / 60)
    const seconds = Math.floor(timeElapsed % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="bg-main">
        <div>
          <h1>Stopwatch</h1>
          <div className="card">
            <div className="timer-heading">
              <img
                alt="stopwatch"
                className="stopwatch-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p>Timer</p>
            </div>
            <h1>{this.getStringifiedTimeFormat()}</h1>
            <div className="buttons-container">
              <button
                onClick={this.onStartTimer}
                className="button btn-1"
                type="submit"
              >
                Start
              </button>
              <button
                onClick={this.onStopTimer}
                className="button btn-2"
                type="submit"
              >
                Stop
              </button>
              <button
                onClick={this.onResetTimer}
                className="button btn-3"
                type="submit"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
