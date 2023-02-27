import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="clothes-container">
          <div className="description-container">
            <h1 className="heading">Clothes That Get You Noticed</h1>
            <p className="para">
              Fashion is part of the daily air and it does not quit help that it
              changes all the time.Clothes always have been a marker of the era
              and we are in a revolution.Your fashion makes you been seen and
              heard that way you are.So,celebrate the seasons new and exciting
              fashion in your own way
            </p>
            <button type="button" className="shop-btn">
              Shop Now
            </button>
          </div>
          <div className="home-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="Clothes That Get YOU Noticed"
              className="home-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
