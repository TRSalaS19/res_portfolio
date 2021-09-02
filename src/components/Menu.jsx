import React from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href='#portfolio'>Portfolio Projects</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href='#contact'>Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
