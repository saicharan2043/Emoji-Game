// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiList, onImageClick} = props
  const {id, emojiName, emojiUrl} = emojiList
  return (
    <li className="list-container">
      <img src={emojiUrl} alt={emojiName} className="emoji-size" />
    </li>
  )
}

export default EmojiCard
