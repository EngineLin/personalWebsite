import React from 'react'
import ReactDOM from 'react-dom'

import NavbarComponent from './components/navbar/navbar-index'
import HeaderComponent from './components/header/header-index'
import AboutComponent from './components/about/about-index'
import SkillsComponent from './components/skills/skills-index'
import WorksComponent from './components/works/works-index'
import ContactComponent from './components/contact/contact-index'

const styleOfContainer = {
  boxShadow: '3px 3px 8px #000',
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.scrolling = this.scrolling.bind(this)
    this.resizing = this.resizing.bind(this)
    this.state = {
      scrollPosition: 0,
      windowHeight: window.innerHeight,
    }
  }

  // 監聽卷軸滾動、視窗尺寸調整事件
  componentDidMount() {
    window.addEventListener('scroll', this.scrolling)
    window.addEventListener('resize', this.resizing)
  }

  scrolling() {
    const scrollPosition = window.scrollY
    this.setState({ scrollPosition })
  }

  resizing() {
    const windowHeight = window.innerWidth
    this.setState({ windowHeight })
  }

  render() {
    return (
      <div>
        <HeaderComponent
          position={this.state.scrollPosition}
        />
        <NavbarComponent
          position={this.state.scrollPosition}
          windowHeight={this.state.windowHeight}
        />

        <dir className="container p-0" style={styleOfContainer}>
          <AboutComponent />
          <SkillsComponent
            position={this.state.scrollPosition}
            windowHeight={this.state.windowHeight}
          />
          <WorksComponent />
          <ContactComponent
            position={this.state.scrollPosition}
            windowHeight={this.state.windowHeight}
          />
        </dir>

        <div id="footer">
          <h5 className="text-center mt-3 mb-3">Copyright © Engine Lin All rights reserved</h5>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'))
