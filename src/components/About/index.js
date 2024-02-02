// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'

const About = () => {
  return (
    <Link to="/about">
      <Header />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
          alt="about"
          className="about-img"
        />
      </div>
    </Link>
  )
}

export default About
