import React from 'react'

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props)
    this.scrollTo = this.scrollTo.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.setNavbarActive = this.setNavbarActive.bind(this)
    this.state = {
      title: 'Engine Lin\'s personal website',
      isOpen: false,
    }
  }

  componentDidUpdate() {
    this.setNavbarActive()
  }

  setNavbarActive() {
    const linkAry = [...document.querySelectorAll('.nav-link')]

    linkAry.forEach((link) => {
      const { position } = this.props
      const target = link.hash
      const targetTop = document.querySelector(target).offsetTop
      const targetHeight = document.querySelector(target).offsetHeight

      link.classList.remove('active')

      if (position > targetTop - 120
       && position < targetTop + targetHeight) {
        link.classList.add('active')
      }
    })
  }

  toggleNavbar() {
    const navbarWrapperDOM = document.getElementById('navbarNavAltMarkup')

    if (this.state.isOpen) {
      navbarWrapperDOM.style.display = 'none'
    } else {
      navbarWrapperDOM.style.display = 'block'
    }

    this.setState({ isOpen: !this.state.isOpen })
  }

  scrollTo() {
    const navbarWrapperDOM = document.getElementById('navbarNavAltMarkup')

    // if (duration <= 0) return

    navbarWrapperDOM.style.display = 'none'

    this.setState({ isOpen: !this.state.isOpen })

    // const currentPosition = window.scrollY
    // const targetTop = document.querySelector(targetId).scrollTop
    // const difference = targetTop - currentPosition
    // const perTick = difference / duration * 10

    // setTimeout(() => {
    //   window.scroll(0, currentPosition + perTick)

    //   if (currentPosition === targetTop) return

    //   scrollTo(targetId, duration - 10)
    // }, 10)
  }

  render() {
    return (
      <div
        className="navbar navbar-expand-lg navbar-light bg-warning position-styicky sticky-top"
        role="navigation"
      >

        <div className="col-12 col-lg-6 d-flex justify-content-between">
          <a href="#" className="navbar-brand">
            {this.state.title}
            <span className="sr-only">(current)</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={() => this.toggleNavbar()}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div className="col-lg-6">
          <div
            id="navbarNavAltMarkup"
            className="collapse navbar-collapse"
          >
            <div className="navbar-nav col-8 d-flex justify-content-between">
              <a
                id="link-about"
                className="nav-item nav-link"
                href="#aboutMe"
                onClick={() => this.scrollTo()}
              >
                About
              </a>
              <a
                id="link-skills"
                className="nav-item nav-link"
                href="#skills"
                onClick={() => this.scrollTo()}
              >
                Skills
              </a>
              <a
                id="link-works"
                className="nav-item nav-link"
                href="#works"
                onClick={() => this.scrollTo()}
              >
                Works
              </a>
              <a
                id="link-contact"
                className="nav-item nav-link"
                href="#contact"
                onClick={() => this.scrollTo()}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = NavbarComponent
