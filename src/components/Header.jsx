import React from 'react'

export default function Header() {
  return (
    <div className='header'>
        <div className="header__items">
            <div className='header__item nav-left'>
            <nav>
                <ul>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">o mně</a></li>
                    <li><a href="#">s vámi</a></li>
                </ul>
            </nav>
            </div>
            <div className='header__item logo'>
                <span>
                   kamila gribanova
                </span>
            </div>
            <div className='header__item nav-right'>
                <nav>
                    <ul>
                        <li><a href="#">kde koupit</a></li>
                        <li><a href="#">kontakt</a></li>
                        <li>
                            <a href="#" className='active'>cz</a>
                            <a href="#">eng</a>
                            <a href="#">ru</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
