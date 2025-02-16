import React from 'react'

export default function Center() {
  return (<>
<div className=' d-md-block d-none'>
  
    <div className=' d-flex  justify-content-center align-items-center ' >
      <img src='Images.png' className='pt-5 mt-5' style={{width:'60%'}} alt="" />
    </div>
  </div>  
  <div className=' d-md-none  d-block'>
  <div className=' d-flex  justify-content-center align-items-center' >
      <img src='Images.png' className='pt-5' style={{width:'100%'}} alt="" />
    </div>
    </div>  

{/* CENTER (2) */}
<div className=' d-flex justify-content-center'>

<div className=' pt-5'>
{/* IMGE1 */}
<div className=' d-md-block d-none'>
<div className=' d-flex  justify-content-center'>

<img src="PAGECENTER (1).png" className=' w-75' alt="" />
</div>
<div className=' d-flex justify-content-center pt-4'>

<img src="PAGECENTER (2).png" className='w-75' alt="" />
</div>

</div>

{/* Mobile Images */}
<div className=' d-md-none d-block'>
<div className=' d-flex  justify-content-center pt-5'>

<img src="PAGECENTER (1).png" className='w-100 h-100' alt="" />
</div>
<div className=' d-flex justify-content-center pt-4'>

<img src="PAGECENTER (2).png" className='w-100 h-100' alt="" />
</div>

</div>
{/* IMGE2 */}


<div className=' d-flex justify-content-center'>
<img src="DESINGED.jpg" className='w-50' alt="" />  
</div>

</div>
</div>
  </>
  )
}
