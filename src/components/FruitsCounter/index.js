import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  mango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
      banana: prevState.banana,
    }))
  }

  banana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
      mango: prevState.mango,
    }))
  }

  render() {
    const {banana, mango} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes
            <span className="count"> {banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="card">
              <img
                className="images"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.mango} className="btn">
                Eat Mangoes
              </button>
            </div>
            <div className="card">
              <img
                className="images"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.banana} className="btn">
                Eat bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
