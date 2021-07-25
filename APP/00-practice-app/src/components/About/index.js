import React from "react";
import './about.css';
import image from './Photo.png';

function About() {
  return (
    <div class="section-content">
      <img src={image} alt="Logo" />
      <div id="about me" class="row">
        <div class="section-title">
          <div class="col-2">About Me</div>
        </div>
        <div class="col-10">I am currently working as a techical customer support consultant at Ipstar which is
          a
          satellite broadband internet provider. I am responsible for level 1 and 2 techical support.</div>

      </div>
    </div>

  );
}

export default About;