import React from 'react';
import { faLocation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Info = () => {
    return (
        <div>
                 <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1   mt-5 '> 
              <div class="avatar">
  <div class="w-24 rounded-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9hSBe5Zkrz0adu31yTLrGcyYS6T9FppiEg&usqp=CAU" />
  </div>

  <div className='mt-5'>
    <h2>John Harry</h2>
   <div className='flex'>
   <div>
    <FontAwesomeIcon icon={faLocation} color></FontAwesomeIcon>
    </div>
    <div>
    <h2>London,England</h2>
    </div>
    
   </div>
  </div>


</div>
  
  
   </div>
   

   <div style={{height:'100px'}}  class="card w-75 ml-7 border-2 border-rose-500 bg-zinc-300 mb-7 mt-3 ml-7 mr-6" >
  <div class="card-body  ">
  
<div className='flex items-center justify-center space-x-10 text-center'>
<div>
    <p><span className='font-bold text-xl'>69 </span><small>kg</small><br></br>
    <small>Weight</small></p>
</div>

<div>
     <p><span className='font-bold text-xl'>5.11</span><br></br>
    <small>Height</small></p>
    </div>

<div
><p><span className='font-bold text-xl'>26 </span><small>yrs
        </small>
        <br></br><small>Age</small></p>
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