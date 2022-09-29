import React from 'react';

const Exercise = ({exercise,addToDetail}) => {

    const { name,img,time} = exercise;
   
    return (
        <div>
            <div>
    
<div class="card w-64 border-2 border-rose-500 bg-base-100 shadow-xl mt-5">
  <figure><img style={{width:"150px" , height:"150px"}} src={img} alt="" /></figure>
  <div class="card-body">
    <h2 class="text-center font-bold text-xl">{name}</h2>
    <p  class="text-center">Time: {time}</p>
    <div class="mx-auto d-block w-50 mt-5">
      <button   onClick={()=>addToDetail(exercise) }class="btn btn btn-outline border-2 border-rose-500 btn-primary  ">Add to List</button>

    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Exercise;