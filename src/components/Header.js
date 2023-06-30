import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to="/">Marvelous Universe</Link>
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/movies" className='btn'>Movies</Link>
                    </li>
                    <li>
                        <Link to="/comics" className='btn'>Comics</Link>
                    </li>
                    <li>
                        <Link to="/tv" className='btn'>TV Shows</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header