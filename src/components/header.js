import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Demo reel.</div>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/AlexandreUser">Developed by Alexandre Vieira</a>
            </li>
            <li className='btn'>
              <a href='/'>Learn more</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
