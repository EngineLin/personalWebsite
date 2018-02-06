import React from 'react'
import Avatar from './../../../res/images/avatar.png'
import Background from './../../../res/images/wallpaper-contact.png'

const styleOfWrapper = {
  backgroundImage: `url(${Background})`,
}

const styleOfTranslate = {
  opacity: '0',
  transform: 'translateY(20px)',
  transition: '0.5s',
}

const styleOfIcon = {
  fontSize: '32px',
  color: 'black',
}

class ContactComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '林尹麒',
      englishName: 'Engine Lin',
      email: 'linengine@gmail.com',
      phoneNumber: '+886 928 513 196',
      facebookUrl: 'https://www.facebook.com/linengine',
      githubUrl: 'https://github.com/EngineLin',
      isOpen: false,
    }
  }

  shouldComponentUpdate() {
    return !this.state.isOpen
  }

  componentDidUpdate(prop) {
    const { position } = prop
    const { windowHeight } = prop

    this.openAnimation(position, windowHeight)
  }

  openAnimation(position, windowHeight) {
    const contactTop = document.getElementById('contact').offsetTop

    if (position >= contactTop - (windowHeight * 0.6)
     && this.state.isOpen === false) {
      const imageDOM = document.getElementById('contact-image')
      const infoDOM = document.getElementById('contact-info')

      imageDOM.style.opacity = '1'
      imageDOM.style.transform = 'translateY(0)'
      infoDOM.style.opacity = '1'
      infoDOM.style.transform = 'translateY(0)'

      this.setState({ isOpen: true })
    }
  }

  render() {
    return (
      <div
        id="contact"
        className="d-flex flex-column align-items-center"
        style={styleOfWrapper}
      >
        <h2 className="text-center text-primary pt-5 mt-5 pb-5 mb-0">Contact</h2>
        <img
          id="contact-image"
          className="mb-3"
          style={styleOfTranslate}
          src={Avatar}
          alt="Personal avatar"
        />
        <div id="contact-info" style={styleOfTranslate}>
          <h5 className="myName">{this.state.name} ({this.state.englishName})</h5>
          <h5>E-mail : {this.state.email}</h5>
          <h5>Phone : {this.state.phoneNumber}</h5>
          <div className="row justify-content-around m-5">
            <a
              href={this.state.facebookUrl}
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="fa fa-facebook-square"
                style={styleOfIcon}
                aria-hidden="true"
              />
            </a>

            <a
              href={this.state.githubUrl}
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="fa fa-github"
                style={styleOfIcon}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = ContactComponent
