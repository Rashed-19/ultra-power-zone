import React from 'react';

const Exercise = ({exercise}) => {
    const { name,img,time} = exercise;
   
    return (
        <div>
            <div>
    
<div class="card w-64 bg-base-100 shadow-xl mt-5">
  <figure><img style={{width:"150px" , height:"150px"}} src={img} alt="" /></figure>
  <div class="card-body">
    <h2 class="text-center font-bold text-xl">{name}</h2>
    <p  class="text-center">Time: {time}</p>
    <div class="card-actions justify-end">
      <div className=''>
      <button class="btn btn-primary">Add to List</button>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Exercise;