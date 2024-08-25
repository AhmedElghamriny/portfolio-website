import './header.css'
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const Header = () => {  
  useEffect(() => {
    // This animation is for the small text on the bottom of the landing page screen to pin until the showcase page reaches a certain scrollview
    // setTimeout is needed for pin animations, allowing the pin property to reset inorder for it work properly. Since there is a trigger.kill(), we need to add
    // setTimeout for every other animation.
    const scrollTrigger = {
      trigger: ".website__header-content__text-intro__stick",
      start: "top 5%",
      pin: false,
      markers: false,
    };
    const animation = gsap.to(".website__header-content__text-intro__stick", {
      scrollTrigger: scrollTrigger,
    });
    setTimeout(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all existing triggers
      scrollTrigger.pin = true; // Update the pin property to true
      animation.scrollTrigger = ScrollTrigger.create(scrollTrigger); // Re-create the ScrollTrigger with pinning
    }, 1);
  }, []);
  
  return (
    <div className='website__header'>
      <div className='website__header-content__text'>
        <p className='website__header-content__text-greeting'>Hello!<br></br>I’m Ahmed.</p>
          <p className='website__header-content__text-intro'>A 4th-year Computer Science student with a passion for data science, machine learning, and software development. As I approach the end of my degree, I'm eager to apply my knowledge and skills to solve real-world problems.<br></br><br></br> My journey has been driven by a deep curiosity for how data can be transformed into actionable insights, and I'm constantly exploring the latest technologies in machine learning and software engineering.<br></br><br></br></p>
          <p className='website__header-content__text-intro__stick'>Let's connect and explore the possibilities of shaping the future with data.</p>
        </div>
    </div>
  )
}

export default Header