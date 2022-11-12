import React from 'react';
import { faLocation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Info = () => {
    return (
        <div>
                 <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  mt-5 '> 
              <div class="avatar">
  <div class="rounded-full">
    <img src="" />
  </div>

  <div className='mt-5'>
    <h2>Name</h2>
   <div className='flex'>
   <div>
    <FontAwesomeIcon icon={faLocation} color></FontAwesomeIcon>
    </div>
    <div>
    <h2>Address:</h2>
    </div>
    
   </div>
  </div>


</div>
  
  
   </div>
   

   <div style={{height:'120px'}}  class="card   border-2 border-black bg-base-300 mb-7 mt-3 ml-7 mr-6" >
  <div class="card-body  ">
  
<div className='flex items-center justify-center space-x-10 text-center'>
<div>
    <p><span className='font-bold text-xl'>63</span>kg<br></br>
    <small className='text-xl'>Weight</small></p>
</div>

<div>
     <p><span className='font-bold text-xl'>5.9</span><br></br>
    <small className='text-xl'>Height</small></p>
    </div>

<div
><p><span className='font-bold text-xl'>30</span>yrs
<br></br><small className='text-xl'>Age</small></p>

</div>

</div>
    
    <div class="card-actions justify-end">
  
    </div>
  </div>
</div>
        </div>
    );
};

export default Info;