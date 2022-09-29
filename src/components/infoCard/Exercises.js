import React, { useEffect, useState } from 'react';
import Exercise from './Exercise';
import'./Exercises.css';


const Exercises = () => {

    const[exercises,setExercises] = useState([]);

    useEffect(() =>{
        fetch('infoCard.json')
        .then(res => res.json())
        .then(data => setExercises(data));
    },[]);


    return (
        <div>
         <div className='exercise-container'>

            <div>



<div className='exercise'>
    {
        exercises.map(exercise=><Exercise key ={exercise.id} exercise ={exercise}>


        </Exercise>)
    }

</div>


            </div>

            <div className=''>
 
              <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 '> 
              <div class="avatar">
  <div class="w-24 rounded-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9hSBe5Zkrz0adu31yTLrGcyYS6T9FppiEg&usqp=CAU" />
  </div>

  <div className='mt-5'>
    <h2>John Harry</h2>
    <h2>London,England</h2>
  </div>


</div>
  
  
   </div>

    
   <div>
<div class="card w-75  ">
  <div class="card-body  ">
  
<div className='flex space-x-10 text-center'>
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
            </div>


  </div>
</div>





    );
};

export default Exercises;