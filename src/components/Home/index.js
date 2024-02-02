// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <Link to="/">
      <Header />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png "
          alt="home"
          className="home-img"
        />
      </div>
    </Link>
  )
}

export default Home
