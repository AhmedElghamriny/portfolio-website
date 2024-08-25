import './landing.css'
import React, { useEffect, memo, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar, Header, Showcase } from './../../components'
import Spline from '@splinetool/react-spline';
import { useInView } from 'react-intersection-observer';

// Assets
import { Landing_Background } from '../../assets'

gsap.registerPlugin(ScrollTrigger); 

const Landing = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow triggering multiple times (load/unload)
    threshold: 0.1,     // Trigger when 10% of the Spline component is in view
  });

  return (
    <div className='website__landing__container'>
      <div ref={ref} className='background-robot'>
        {inView ? (
          <Spline scene="https://prod.spline.design/5fdveFm81xYkyV20/scene.splinecode" />
        ) : (
          <div></div>
        )}
      </div>
      <div className='view-height-group'>
        <Header />
      </div>
    </div>
  );
};

export default Landing;