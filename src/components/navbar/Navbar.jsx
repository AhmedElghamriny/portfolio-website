import './navbar.css';
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {
  useEffect(() => {
    const scrollTrigger = {
      trigger: ".website__showcase__component",  
        start: "top 4.5%",     
        markers: false,
        toggleClass: { 
          targets: ".website__navbar-links__container__menu", 
          className: "website__navbar-links__container__menu-swap"
        }
    };

    const animation = gsap.to(".website__navbar-links__container__menu", {
      scrollTrigger: scrollTrigger,
    });
    setTimeout(() => {
      animation.scrollTrigger = ScrollTrigger.create(scrollTrigger); // Re-create the ScrollTrigger with pinning
    }, 2);
  }, []);
  return (
    <div className='website__navbar'>
        <div className='website__navbar-links'>
            <div className='website__navbar-links__container'>
                <label className='website__navbar-links__container__menu'>
                    <input type='checkbox'/>
                </label>
                <div className='website__navbar-links__container__sidebar'>
                  <nav>
                    <div data-text="Home">Home</div>
                    <div data-text="Portfolio">Portfolio</div>
                    <div data-text="About Me">About Me</div>
                    <div data-text="Contact Me">Contact Me</div>
                  </nav>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
