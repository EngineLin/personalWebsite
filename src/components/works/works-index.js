import React from 'react'
import PicOfWork01 from './../../../res/images/production01.JPG'
import PicOfWork02 from './../../../res/images/production02.JPG'
import PicOfWork03 from './../../../res/images/production03.JPG'

const resetOfUl = {
  margin: '0',
  padding: '0',
  border: '0',
  font: 'inherit',
  verticalAlign: 'baseline',
  listStyle: 'none',
}

const styleOfPic = {
  width: '100%',
  border: '2px solid black',
}

const styleOfTitle = {
  fontSize: '32px',
}

const positionRelative = {
  position: 'relative',
}

const styleOfPicScreen = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  transition: '0.8s',
  MozTransition: '0.8s',
  WebkitTransition: '0.8s',
}

const styleOfBorder = {
  position: 'relative',
  border: '3px solid #A05908',
}

const styleOfPointer = {
  position: 'absolute',
  top: '-11px',
  right: '10px',
  width: '16px',
  height: '16px',
  transform: 'rotate(45deg)',
  backgroundColor: '#fff',
  border: '3px solid #A05908',
}

const styleOfPointerCover = {
  position: 'absolute',
  top: '-7px',
  right: '10px',
  width: '16px',
  height: '16px',
  transform: 'rotate(45deg)',
  backgroundColor: '#fff',
}

const styleOfPoint = {
  fontSize: '20px',
}

class WorksComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = {
      isHoverOfWork01: false,
      isHoverOfWork02: false,
      isHoverOfWork03: false,
      titleOfWork01: '高雄景點網',
      titleOfWork02: '搭便車環島照片牆',
      titleOfWork03: '響應式餐廳網站',
      urlOfWork01: 'https://enginelin.github.io/KaohSiungAttractions/',
      urlOfWork02: 'http://linengine.comeze.com/myTravelPicsWall/index.html',
      urlOfWork03: 'https://enginelin.github.io/RWDPracticing01/',
    }
  }

  handleMouseHover(e) {
    const target = e
    const obj = {}

    obj[target] = !this.state[target]
    this.setState(obj)
  }

  render() {
    return (
      <div id="works">
        <h2 className="text-center text-primary pt-5 mt-5 pb-5 mb-0">Works</h2>

        <ul className="row" style={resetOfUl}>
          <li className="col-md-4">
            <div className="row pr-md-1 pl-md-1" style={positionRelative}>
              <a
                href={this.state.urlOfWork01}
                onMouseEnter={() => this.handleMouseHover('isHoverOfWork01')}
                onMouseLeave={() => this.handleMouseHover('isHoverOfWork01')}
              >
                <img
                  style={styleOfPic}
                  src={PicOfWork01}
                  alt=""
                />
                {
                  this.state.isHoverOfWork01 &&
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={styleOfPicScreen}
                  >
                    <p
                      className="production01 text-light"
                      style={styleOfTitle}
                    >
                      {this.state.titleOfWork01}
                    </p>
                  </div>
                }
              </a>
            </div>

            <div className="row d-flex flex-column m-3 p-1" style={styleOfBorder}>
              <div style={styleOfPointer} />
              <div style={styleOfPointerCover} />

              <h3 className="text-primary text-center">看點：</h3>
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3" style={styleOfPoint}>
                以Vue.js框架編程
              </p>
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3" style={styleOfPoint}>
                利用 AJAX 介接 Open Data 的 JSON 類別資料
              </p>
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3" style={styleOfPoint}>
                Google maps API 串接、定位、標記
              </p>
            </div>
          </li>

          <li className="col-md-4">
            <div className="row pr-md-1 pl-md-1" style={positionRelative}>
              <a
                href={this.state.urlOfWork02}
                onMouseEnter={() => this.handleMouseHover('isHoverOfWork02')}
                onMouseLeave={() => this.handleMouseHover('isHoverOfWork02')}
              >
                <img
                  style={styleOfPic}
                  src={PicOfWork02}
                  alt=""
                />
                {
                  this.state.isHoverOfWork02 &&
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={styleOfPicScreen}
                  >
                    <p
                      className="production02 text-light"
                      style={styleOfTitle}
                    >
                      {this.state.titleOfWork02}
                    </p>
                  </div>
                }
              </a>
            </div>

            <div className="row d-flex flex-column m-3 p-1" style={styleOfBorder}>
              <div style={styleOfPointer} />
              <div style={styleOfPointerCover} />

              <h3 className="text-primary text-center">看點：</h3>
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3">
                Masonry (瀑布流)插件製作自動向上對推擠的版型
              </p>
              <br />
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3">
                light Box 插件製作照片點擊後的燈箱效果
              </p>
              <br />
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3">
                Nivo Slider 插件製作自動轉換的照片面板
              </p>
            </div>
          </li>

          <li className="col-md-4">
            <div className="row pr-md-1 pl-md-1" style={positionRelative}>
              <a
                href={this.state.urlOfWork03}
                onMouseEnter={() => this.handleMouseHover('isHoverOfWork03')}
                onMouseLeave={() => this.handleMouseHover('isHoverOfWork03')}
              >
                <img
                  style={styleOfPic}
                  src={PicOfWork03}
                  alt=""
                />
                {
                  this.state.isHoverOfWork03 &&
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={styleOfPicScreen}
                  >
                    <p
                      className="production03 text-light"
                      style={styleOfTitle}
                    >
                      {this.state.titleOfWork03}
                    </p>
                  </div>
                }
              </a>
            </div>

            <div className="row d-flex flex-column m-3 p-1" style={styleOfBorder}>
              <div style={styleOfPointer} />
              <div style={styleOfPointerCover} />

              <h3 className="text-primary">看點：</h3>
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3">
                利用 CSS 手刻響應式網頁
              </p>
              <br />
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3">
                自動適應手機、平板與桌機下，不同規格的螢幕大小
              </p>
              <br />
              <p aria-hidden="true" className="fa fa-check-circle-o mt-3 mb-3">
                利用 960 Grid 的概念切割版型
              </p>
            </div>
          </li>
        </ul>

      </div>
    )
  }
}

module.exports = WorksComponent
