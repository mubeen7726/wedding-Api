import React from 'react';

import './Footer.css';
import FormInputs from '../FooterForms/Footerinputs.jsx';
export default function FooterForm() {
  return (
    <div className=' pt-5 mt-5'>
      <div>
<div>

<div className=' d-flex justify-content-center'>

<h3 id='Header'>RSVP</h3>
</div>
<div className=' d-flex justify-content-center text-center'>

<small id='PARA' className=' '>Kindly respond by 03 October 2025</small>
</div>



</div>

{/* Form */}
<div>
<FormInputs/>
</div>
      </div>


    </div>
  )
}
