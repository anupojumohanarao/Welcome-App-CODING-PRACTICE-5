// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {Subscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({Subscribed: !prevState.Subscribed}))
  }

  getSubscribeButtonText = () => {
    const {Subscribed} = this.state

    return Subscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const SubscribeButtonText = this.getSubscribeButtonText()

    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="main-paragraph">Thank you! Happy Learning</p>
        <button
          type="button"
          onClick={this.onSubscribe}
          className="main-button"
        >
          {SubscribeButtonText}
        </button>
      </div>
    )
  }
}

export default Welcome
