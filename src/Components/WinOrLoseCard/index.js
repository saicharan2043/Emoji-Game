// Write your code here.
import './index.css'

const WinOrLose = props => {
  const {score} = props
  const isTrue = score === 12
  return (
    <div className="bg-container">
      <div className="text-container">
        <h1 className="won-or-lose-text">{isTrue ? 'You Won' : 'You Lose'}</h1>
        <p className="score-text">{isTrue ? 'Best Score' : 'Score'}</p>
        <p className="score-number">{score}/12</p>
        <button className="button">Play Again</button>
      </div>
      <img
        src={
          isTrue
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        className="img-emoji"
      />
    </div>
  )
}

export default WinOrLose
