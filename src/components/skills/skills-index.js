import React from 'react'

import skillPicUrl from './../../../res/images/skills-pic.svg'
import Background from './../../../res/images/wallpaper-skills.png'
import CSSIcon from './../../../res/images/css-skills-icon.svg'
import JavaScript from './../../../res/images/javascript-skills-icon.svg'
import GitHub from './../../../res/images/github-skills-icon.svg'
import Gulp from './../../../res/images/gulp-skills-icon.png'
import Python from './../../../res/images/python-skills-icon.svg'

const styleOfWrapper = {
  backgroundImage: `url(${Background})`,
}

const styleOfPic = {
  height: '250px',
}

const styleOfIcon = {
  width: '100%',
}

const styleOfRunbox = {
  position: 'relative',
  height: '30px',
  borderRadius: '3px',
  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
  backgroundColor: 'rgba(250, 250, 250, 0.45)',
  overflow: 'hidden',
}

const styleOfRunbar = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0px',
  right: '0px',
  color: '#fff',
  fontSize: '1rem',
  textAlign: 'center',
  lineHeight: '30px',
  height: '30px',
  width: '0',
  backgroundColor: '#165EA8',
  transition: 'width 2s ease',
}

class SkillsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.openAnimation = this.openAnimation.bind(this)
    this.rollingBackground = this.rollingBackground.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  componentDidUpdate(prop) {
    const { windowHeight } = prop

    if (!this.state.isOPen) {
      this.openAnimation(windowHeight)
    }

    this.rollingBackground()
  }

  openAnimation(windowHeight) {
    const skillTop = document.getElementById('skillsTop').offsetTop

    if (this.props.position >= skillTop - (windowHeight * 0.7)
     && this.state.isOpen === false) {
      const skillsBarDOM = document.querySelectorAll('.skillBar')

      skillsBarDOM.forEach((DOM) => {
        const value = DOM.dataset.progress

        DOM.style.width = `${value}%`
      })

      this.setState({ isOpen: true })
    }
  }

  rollingBackground() {
    const skillsDOM = document.getElementById('skills')
    const contactDOM = document.getElementById('contact')

    skillsDOM.style.backgroundPositionX = `${-this.props.position / 2}px`
    contactDOM.style.backgroundPositionX = `${-this.props.position / 2}px`
  }

  render() {
    return (
      <div
        id="skills"
        className="pb-3"
        style={styleOfWrapper}
      >
        <h2
          className="text-center text-primary pt-5 mt-5 pb-5 mb-0"
        >
          Skills
        </h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center">
              <img
                className="skillAsidePic"
                style={styleOfPic}
                src={skillPicUrl}
                alt="Skills background"
              />
            </div>

            <p className="text-light pt-5 pr-3 pb-5 pl-3">
              能夠從零開始：
              <br />
              HTML 、 CSS 建立頁面，
              <br />
              JavaScript 、 jQuery 製作使用者行為反應的動畫， Gulp 管理版本，
              <br />
              Gulp 前端自動化
              <br />
              以及瞭解基礎後端運作機制。
            </p>
          </div>

          <div
            id="skillsTop"
            className="col-lg-6 d-flex flex-column align-items-between"
          >
            <div className="skill01">
              <div className="row mt-2 mb-2">
                <div className="col-2">
                  <img
                    className="skillIcon01"
                    style={styleOfIcon}
                    src={CSSIcon}
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <h4 className="text-light">HTML/CSS/RWD/Sass</h4>
                </div>
              </div>
              <div className="row mr-3 ml-3" style={styleOfRunbox}>
                <div className="skillBar" data-progress="90" style={styleOfRunbar}>90%</div>
              </div>
            </div>

            <div className="skill02">
              <div className="row mt-2 mb-2">
                <div className="col-2">
                  <img
                    className="skillIcon02"
                    style={styleOfIcon}
                    src={JavaScript}
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <h4 className="text-light">JavsScript/jQuery/Vue.js</h4>
                </div>
              </div>
              <div className="row mr-3 ml-3" style={styleOfRunbox}>
                <div className="skillBar" data-progress="85" style={styleOfRunbar}>85%</div>
              </div>
            </div>

            <div className="skill03">
              <div className="row mt-2 mb-2">
                <div className="col-2">
                  <img
                    className="skillIcon03"
                    style={styleOfIcon}
                    src={GitHub}
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <h4 className="text-light">Git/GitHub</h4>
                </div>
              </div>
              <div className="row mr-3 ml-3" style={styleOfRunbox}>
                <div className="skillBar" data-progress="70" style={styleOfRunbar}>70%</div>
              </div>
            </div>

            <div className="skill04">
              <div className="row mt-2 mb-2">
                <div className="col-2">
                  <img
                    className="skillIcon04"
                    style={styleOfIcon}
                    src={Gulp}
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <h4 className="text-light">Gulp</h4>
                </div>
              </div>
              <div className="row mr-3 ml-3" style={styleOfRunbox}>
                <div className="skillBar" data-progress="75" style={styleOfRunbar}>75%</div>
              </div>
            </div>

            <div className="skill05">
              <div className="row mt-2 mb-2">
                <div className="col-2">
                  <img
                    className="skillIcon05"
                    style={styleOfIcon}
                    src={Python}
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <h4 className="text-light">Python</h4>
                </div>
              </div>
              <div className="row mr-3 ml-3" style={styleOfRunbox}>
                <div className="skillBar" data-progress="60" style={styleOfRunbar}>60%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = SkillsComponent
