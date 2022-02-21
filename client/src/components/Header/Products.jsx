import React from 'react';
import './../../style/navbar.css'

export default function Products() {
  return <div>
    <li>
            <a className = 'a'  href="/#">Product&#9662;</a>
            <ul className="dropdown">
                <li><a className = 'hover-underline-animation a' href="/#">Features</a></li>
                <li><a className = 'hover-underline-animation a' href="/#">Channels</a></li>
                <li><a className = 'hover-underline-animation a' href="/#">Integrations</a></li>
                <li><a className = 'hover-underline-animation a' href="/#">Security</a></li>
                <li><a className = 'hover-underline-animation a' href="/#">Customers</a></li>
            </ul>
        </li>
  </div>;
}
