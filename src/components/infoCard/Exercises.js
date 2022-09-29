import React, { useEffect, useState } from 'react';
import Exercise from './Exercise';
import'./Exercises.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExerciseDetails from '../Details/ExerciseDetails';
import {addToStorage, storageExercise } from '../Stroage/Stroage';
import BreakTime from '../Break/BreakTime';
import Info from '../info/Info';
const Exercises = () => {

    const[exercises,setExercises] = useState([]);
    const [addedExercise, setAddedExercise] = useState([]);
    const [saveBreakTime, setBreakTime]  = useState(0)

    useEffect(() =>{
        fetch('infoCard.json')
        .then(res => res.json())
        .then(data => setExercises(data));
    },[]);

  
    const addToDetail = (exercise) => {
      console.log(exercise)
      let newCart = []
      newCart = [...addedExercise, exercise] 
      setAddedExercise(newCart)
  }

  const mySum = (prev , current) => { 
    return prev + current.time
}

  const total = addedExercise.reduce(mySum, 0)

  const clickedBtn = (breakTime) => { 
   addToStorage(breakTime.btn)
    setBreakTime(breakTime.btn)
}

useEffect(() => {
  const savedData = storageExercise()
  for (const key in savedData) {
      setBreakTime(key)
  }
}, []);

    const notify = () => toast("Congratulation you complete the exercise successfully!");

    return (
        <div>
         <div className='exercise-container'>

            <div>
      
      
<div className='exercise ml-7'>
    {
        exercises.map(exercise=><Exercise key ={exercise.id} exercise ={exercise} addToDetail={addToDetail} >
        </Exercise>)
    }

</div>        
 </div>


 <div className= ' border-2 border-rose-500 ml-7 mt-5  bg-zinc-200 rounded'>
   <div>
<div  class=" ml-7 0 mb-7 mt-3  mr-6" >
<Info></Info>

</div>



<div>
  <h2 className='font-bold text-xl mb-4 text-left ml-7'>Add a Break</h2>
  <BreakTime clickedBtn={ clickedBtn}></BreakTime>
  <ExerciseDetails total={total} saveBreakTime={saveBreakTime}></ExerciseDetails>
</div>


<div>
<button  onClick={notify} class="btn btn-outline btn-primary border-2 border-rose-500 mb-7">Activity Complete</button>
</div>
    </div>
   </div>
  </div>

 
  <ToastContainer />
</div>





    );
};

export default Exercises;