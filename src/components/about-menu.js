import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutMenu(props) {
    return (
        <nav className="about-menu">
            <ul>
                <Link to="/about/mission">Our mission</Link>
                <Link to="/about/values">Our values</Link>
                <Link to="/about/team">Our team</Link>
                <Link to="/about/labs">Our labradoodles</Link>
            </ul>
        </nav>
    );
}
