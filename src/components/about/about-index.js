import React from 'react'
import TeaUrl from './../../../res/images/tea.svg'

const styleOfPic = {
  height: '250px',
}

class AboutComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id="aboutMe">
        <h2
          className="text-center text-primary pt-5 mt-5 pb-5 mb-0"
        >
          About Me
        </h2>
        <div className="row flex-row-reverse">
          <ul className="col-md-6 d-flex flex-column justify-content-center pt-3 pb-3">
            <li className="mt-3 mb-3 ml-2">2016 年 6 月出發環遊世界半年，勇於挑戰、心態開放。</li>
            <li className="mt-3 mb-3 ml-2">好學、幽默、一點點自戀。</li>
          </ul>
          <img
            className="col-md-6"
            style={styleOfPic}
            src={TeaUrl}
            alt="A tea for about me"
          />
        </div>
      </div>
    )
  }
}

module.exports = AboutComponent
