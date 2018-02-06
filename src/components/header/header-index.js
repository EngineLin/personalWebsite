import React from 'react'
import TypingComponent from './header-typing'
import Background from './../../../res/images/header-bg.jpg'

const styleOfHeader = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
}

const styleOfTitleWrapper = {
  marginTop: '20vh',
}

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props)
    this.rollingBackground = this.rollingBackground.bind(this)
    this.state = {}
  }

  componentDidUpdate() {
    this.rollingBackground()
  }

  rollingBackground() {
    const { position } = this.props
    const headerDOM = document.getElementById('header')
    const titleDOM = document.getElementById('title')

    headerDOM.style.backgroundPositionY = `${position / 2}px`
    titleDOM.style.marginTop = `${position / 2}px`
  }

  render() {
    return (
      <div
        id="header"
        className="d-flex justify-content-center"
        style={styleOfHeader}
      >
        <div
          className="col-8 col-sm-6 col-md-5 col-lg-5 col-xl-4 pt-xl-5 ml-3"
          style={styleOfTitleWrapper}
        >
          <TypingComponent />
        </div>
      </div>
    )
  }
}

module.exports = HeaderComponent
