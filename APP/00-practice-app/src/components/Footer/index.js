import React from "react";
import { Link } from "react-router-dom";
import './footer.css';



function Footer() {
  return (

    <div>

      <div class="container2">

        <div id ="Contact me" class="section-title"><Link to ="/contact">Contact me</Link></div>
        <div class="section-content"><a href>0420760898</a>
        </div>
        <div class="section-content"><a href="mailto:sandeep_gc@hotmail.com">sandeep_gc@hotmail.com</a></div>
        <div class="section-content"><a href="https://www.linkedin.com/in/sandeep-gc">Linkedin</a>
        </div>
        <div class="section-content"><a href="https://github.com/sgc1992/Portfolio">Github</a>
        </div>

      </div>

    </div>






  );
}

export default Footer;