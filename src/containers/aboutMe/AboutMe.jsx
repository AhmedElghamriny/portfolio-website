import './aboutMe.css'
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from '@splinetool/react-spline';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);


const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow triggering multiple times (load/unload)
    threshold: 0.1,     // Trigger when 10% of the Spline component is in view
  });

  useEffect(() => {
    // This animation is for the color of the hamburger menu to turn back into white
    const scrollTrigger = {
      trigger: ".website__aboutMe__container",  
        start: "top 4.5%",     
        markers: false,
        toggleClass: { 
          targets: ".website__navbar-links__container__menu", 
          className: "website__navbar-links__container__menu-swap-back"
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
    <div className='website__aboutMe__container'>
      <div ref={ref} className='background-star'>
        {inView ? (
          <Spline scene="https://prod.spline.design/P9Cx0kMh2WlZJZww/scene.splinecode" />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default AboutMe