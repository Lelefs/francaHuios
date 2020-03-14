import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <ul>
            <li>
                <Link to="/historia">História</Link>
            </li>
            <li>
                <Link to="/religiao">Religião</Link>
            </li>
        </ul>
    )
}

export default Main;