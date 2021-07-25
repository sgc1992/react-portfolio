import React from "react";
import './nav.css';
import PDF from "./Resume.pdf";


function Nav() {
  return (
    <nav>
    <ul>
      <div class="flex-container">
        <div>Sandeep GC
        </div>
      </div>

      <li><a href={PDF}>Resume</a></li>
      <li><a href="#Contact me">Contact me</a></li>
      <li><a href="#Work">Work</a></li>
      <li><a href="#About me">About me</a></li>
    </ul>
  </nav>
    
  );
}

export default Nav;
