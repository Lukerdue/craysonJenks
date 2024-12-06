import React from 'react';
import { Headerstyle } from '../styles/headerstyle'

function Header(){
    return(
        <Headerstyle className="header">
            <div className="header-left">
                <h1 className="title">Crayson Jenks</h1>
            </div>
            <div className="header-right">
                <div className="menu-wrapper">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="/" className="menu-a">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="/projects" className="menu-a">Projects</a>
                        </li>
                        <li className="menu-item">
                            <a href="/image-gallery" className="menu-a">Images</a>
                        </li>
                
                    </ul>
                </div>
            </div>
        </Headerstyle>
    )
}

export default Header