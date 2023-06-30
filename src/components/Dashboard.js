import React from 'react';
import Phase1 from '../assets/images/phase1.jpg'
import Phase2 from '../assets/images/phase2.jpg'
import Phase3 from '../assets/images/phase3.jpg'
import Phase4 from '../assets/images/phase4.jpg'

import './Dashboard.css';

const Dashboard = () => {
  const slides = [
    {image: Phase1, title: "Phase 1", phase: "/phase1", class: "blur_back phase1back"},
    {image: Phase2, title: "Phase 2", phase: "/phase2", class: "blur_back phase2back"},
    {image: Phase3, title: "Phase 3", phase: "/phase3", class: "blur_back phase3back"},
    {image: Phase4, title: "Phase 4", phase: "/phase4", class: "blur_back phase4back"},
  ];
  
  return (
    <div className='phase1'>
          {slides.map(slide => (
            <a href={slide.phase}>
              <div class="movie_card" id="bright">
                <div class={slide.class}>
                  <h4 className='text'>{slide.title}</h4>
                </div>
              </div>
            </a>
        ))}
    </div>
  )
}

export default Dashboard
