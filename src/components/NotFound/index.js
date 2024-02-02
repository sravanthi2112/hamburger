// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => {
  return (
    <Link to="bad-path">
      <Header />
      <div className="not-dound-sec">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="not-found"
        />
        <h1 className="not-found-heading">Lost your Way?</h1>
        <p className="description">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </Link>
  )
}

export default NotFound
