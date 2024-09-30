// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition }
    from 'react-transition-group';


const Header = () => {
    return (
        <CSSTransition in={true} appear={true}
            timeout={500} classNames="fade">
            <header className="header">
                <div className="container">
                    <h1 className="logo">
										Haqdarshak </h1>

                    <nav className="nav">
                        <ul>
                            <li><Link to="Home"
                                className="link">Home</Link></li>

                        </ul>
                    </nav>
                </div>
            </header>
        </CSSTransition>
    );
}

export default Header;
