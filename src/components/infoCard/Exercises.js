import React, { useEffect, useState } from 'react';
import Exercise from './Exercise';
import'./Exercises.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Exercises = () => {

    const[exercises,setExercises] = useState([]);

    useEffect(() =>{
        fetch('infoCard.json')
        .then(res => res.json())
        .then(data => setExercises(data));
    },[]);
    const notify = () => toast("Congratulation you complete the exercise successfully!");

    return (
        <div>
         <div className='exercise-container'>

            <div>



<div className='exercise ml-7'>
    {
        exercises.map(exercise=><Exercise key ={exercise.id} exercise ={exercise}>


        </Exercise>)
    }

</div>


            </div>

            <div className= ' ml-7 mt-5  bg-zinc-200 rounded'>
 
              <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ml-8  mt-5 '> 
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
<div style={{height:'100px'}}  class="card w-75 ml-7 bg-zinc-300 mb-7 mt-3 ml-7 mr-6" >
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

{/* break */}

<div>
  <h2 className='font-bold text-xl mb-4 text-left ml-7'>Add a Break</h2>
</div>
<div style={{height:'100px'}} className='flex rounded text-xl bg-slate-300 space-x-10 px-7 ml-7 mr-7 items-center justify-center mb-5'>

<div className='mt-5 mb-5 bg-slate-400 rounded '>
<h2>20s</h2></div>
<div  className='mt-5 mb-5 bg-slate-400 rounded'><h2>30s</h2></div>
<div  className='mt-5 mb-5 bg-slate-400  rounded'><h2>40s</h2></div>
<div  className='mt-5 mb-5 bg-slate-400  rounded'><h2>50s</h2></div>
<div  className='mt-5 mb-5 bg-slate-400  rounded'><h2>60s</h2></div>

</div>

<div className='mt-5'>
    <h2 className='text-left text-xl font-bold ml-7 mb-7'>Exercise Details</h2>

    <h2 > <span className='font-bold'>Exercise Time: </span> <input type="number" placeholder="Type here" class="input w-full max-w-xs bg-zinc-300 mb-5" /></h2>
    <h2>  <span className='font-bold'>Break Time:</span> <input type="number" placeholder="Type here" class="input w-full max-w-xs bg-zinc-300 mb-7" /></h2>
  </div>
{/* button */}
<div>
<button  onClick={notify} class="btn btn-outline btn-primary mb-7">Activity Complete</button>
</div>
    </div>
            </div>
  </div>


 
  <ToastContainer />
</div>





    );
};

export default Exercises;