// Write your code here.
import './index.css'

const NavBar = props => {
  const {isTrue, score, topScore} = props
  return (
    <nav className="nav-bar">
      <div className="score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt=""
          className="logo-img"
        />
        <p className="score-text">Emoji Game</p>
      </div>
      {isTrue === false ? (
        <div className="score-container">
          <p className="score-text">Score: {score}</p>
          <p className="score-text">Top Score: {topScore}</p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
