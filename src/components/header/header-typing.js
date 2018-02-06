import React from 'react'

// #TOFIX 尺寸、排版與 RWD 不知道有沒有更好的方法
const styleOfTitle = {
  fontSize: '2rem',
}

const styleOfFlashbox = {
  display: 'inline-block',
  backgroundColor: '#fff',
  width: '2px',
  height: '2rem',
}

class TypingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.retypeTitle = this.retypeTitle.bind(this)
    this.state = {
      greeting: '',
      greetingList: [
        'Hello, I\'m Engine Lin!',
        'How was your day?',
        'Let me show you who am I.',
      ],
      isFlashboxOpen: false,
    }
  }

  componentDidMount() {
    this.state.greetingList.forEach((greeting, index) => {
      setTimeout(() => {
        this.retypeTitle(index)
      }, 4000 * index)
    })

    setInterval(() => {
      this.setState({ isFlashboxOpen: !this.state.isFlashboxOpen })
    }, 500)
  }

  // header 打字動畫的邏輯
  retypeTitle(indexOfGreetingList) {
    const titleAry = this.state.greetingList[indexOfGreetingList].split('')
    const { length } = titleAry
    const greetingAry = []

    titleAry.forEach((item, index) => {
      setTimeout(() => {
        greetingAry.push(item)
        this.setState({ greeting: JSON.parse(JSON.stringify(greetingAry)).join('') })
      }, (1500 / length) * index)
    })

    // 最後一次動畫不要消除的控制關卡
    if (indexOfGreetingList + 1 >= this.state.greetingList.length) {
      return
    }

    setTimeout(() => {
      titleAry.forEach((item, index) => {
        setTimeout(() => {
          greetingAry.pop()
          this.setState({ greeting: JSON.parse(JSON.stringify(greetingAry)).join('') })
        }, (700 / length) * index)
      })
    }, 2800)
  }

  render() {
    return (
      <div id="title">
        <div
          className="text-light text-lg-lg"
          style={styleOfTitle}
        >
          {this.state.greeting}
          {
            this.state.isFlashboxOpen &&
            <div style={styleOfFlashbox} />
          }
        </div>
      </div>
    )
  }
}

module.exports = TypingComponent
