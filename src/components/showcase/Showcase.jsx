import './showcase.css'
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const Showcase = () => {
  
  useEffect(() => {
    const scrollTrigger = {
      trigger: ".website__showcase__component",
      start: "top 6%",
      markers: false,
      toggleClass: {targets: ".website__header-content__text-intro__stick", className: "website__header-content__text-intro__stick-swap"}
    };

    const animation = gsap.to(".website__header-content__text-intro__stick", {
      scrollTrigger: scrollTrigger,
    });
    setTimeout(() => {
      animation.scrollTrigger = ScrollTrigger.create(scrollTrigger); // Re-create the ScrollTrigger with pinning
    }, 2);
  }, []);
  return (
    <div className='website__showcase__component'>
      <div className='website__showcase__title'>
        <p>Projects.</p>
      </div>
      <div className='website__showcase__slideshow-container'>
        <div className='website__showcase__slideshow-cards'>
          <div className='card-1 card'></div>
          <div className='card-2 card'></div>
          <div className='card-3 card'></div>
          <div className='card-4 card'></div>
          <div className='card-5 card'></div>
        </div>
        <div className='website__showcase__slideshow-description'>
          <div className='card-1-description description'>
          <p className='project-title'>Turing Machine Simulator CLI</p>
          <p className='project-description'>This Turing Machine simulator (using a command-line interface) is a Python program designed to emulate the behavior of a Turing Machine, an essential concept in the theory of computation. The simulator allows users to design and operate Turing Machines with either one-sided or two-sided tapes. <br></br><br></br>This simulator serves as a powerful tool for understanding and experimenting with the foundational concepts of Turing Machines and computational theory. It provides a hands-on approach to learning, enabling users to visualize the behavior of Turing Machines through interactive state and transition management.</p>
          </div>
          <div className='card-2-description description'>
            <p className='project-title'></p>
            <p className='project-description'></p>
          </div>
          <div className='card-3-description description'>
            <p className='project-title'></p>
            <p className='project-description'></p>
          </div>
          <div className='card-4-description description'>
            <p className='project-title'></p>
            <p className='project-description'></p>
          </div>
          <div className='card-5-description description'>
            <p className='project-title'></p>
            <p className='project-description'></p>
          </div>
        </div>
      </div>
      <div className='website__showcase__slideshow-bottom'>
        <div className='website__showcase__small-text'>
          <p>Let's connect and explore the possibilities of shaping the future with data.</p>
        </div>
        <div class="website__showcase__social-icons">
          <a href="https://github.com/AhmedElghamriny" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/ahmed-elghamriny-b20673261/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/ahmdd.fouad?igsh=azh0ZDF2YTVuMng%3D&utm_source=qr" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Showcase