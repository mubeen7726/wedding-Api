import React from 'react';
import './image.css';
import { Link } from 'react-router-dom';
import AudioPlay from '../assets/wedding.mp3';

export default function MainPage() {

  const Submit = () => {
    const audio = new Audio(AudioPlay);
    
    audio.play()
  };

  return (
    <div id='Image'>
      <div className='d-flex justify-content-center'>
        <div style={{ paddingTop: "361px" }}>
          <p className='text-white text-center'>
            “We're honored to have you here and can't wait to share this unforgettable journey together"
          </p>
          <div className='d-flex justify-content-center'>
            <button className='btn bg-primary text-white' onClick={Submit}>
              <Link to={'/Welocome'} className="text-decoration-none text-white">
                View Invitation
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
