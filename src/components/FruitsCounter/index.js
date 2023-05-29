import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="countValue">{mangoCount}</span> mangoes
            <span className="countValue"> {bananaCount}</span> bananas
          </h1>
          <div className="imageContainer">
            <div className="box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button type="button" className="btn" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="image"
                alt="banana"
              />
              <button type="button" className="btn" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
