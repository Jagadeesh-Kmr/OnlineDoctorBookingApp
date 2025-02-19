import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
    <>
    <Header />
    <div className='home-main-div'>
     <div className='home-mb-div'>
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_USFc7M6HMiZnG0fnMvsu2v1Ub7umVU1Ozxc3QhehV8lCLd1W"
          alt="doctor"
          className="web-mb-img"
        />
      </div> 

      <div className='home-desc-div'>
        <p className="home-p">
          ONLINE<span style={{color: '#4560db', marginLeft: '10px'}}>DOCTOR</span>
        </p>
        <h1 className="home-h1">
          Find The Good Life With Good Health.
        </h1>
        <p className="home-p desc">
         Need to see a doctor now? you have come to the right place.
        </p>
        <Link to="/doctors" className="link">
          <button type="button" className="link-btn">
            FIND DOCTORS
          </button>
        </Link>
      </div>

      <div>
        <img
        src="https://www.nightingales.in/membership-program/img/assesment.png"
        alt="doctor"
        className="web-img"
        />
      </div>
    </div>
    </> 
    )

export default Home