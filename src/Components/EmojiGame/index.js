/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props 
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLose from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, TopScore: 0, IdList: [], isTrue: false}

  //   const shuffledEmojisList = () => {
  //     //   return emojisList.sort(() => Math.random() - 0.5)
  //     console.log("hello")
  //   }

  render() {
    const {score, TopScore, isTrue} = this.state

    const {emojisList} = this.props
    // refreshEmojiList = this.shuffledEmojisList()

    return (
      <div className="bg-color">
        <NavBar isTrue={isTrue} score={score} topScore={TopScore} />
        {isTrue === false ? (
          <ul className="un-list">
            {emojisList.map(echValue => (
              <EmojiCard
                emojiList={echValue}
                key={echValue.id}
                onImageClick={this.onImageClick}
              />
            ))}
          </ul>
        ) : (
          <WinOrLose score={score} />
        )}
      </div>
    )
  }
}

export default EmojiGame
