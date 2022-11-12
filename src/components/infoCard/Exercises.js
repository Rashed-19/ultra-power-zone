import React, { useEffect, useState } from 'react';
import Exercise from './Exercise';
import'./Exercises.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExerciseDetails from '../Details/ExerciseDetails';
import {storageAdded, storageExercises } from '../Stroage/Stroage';
import BreakTime from '../Break/BreakTime';
import Info from '../info/Info';
const Exercises = () => {

    const[exercises,setExercises] = useState([]);
    const [addedExercise, setAddedExercise] = useState([]);
    const [saveBreakTime, setBreakTime]  = useState(0)

    //load data

    useEffect(() =>{
        fetch('information.json')
        .then(res => res.json())
        .then(data => setExercises(data));
    },[]);


  //details
    const addToDetail = (exercise) => {

      let newCart = []
      newCart = [...addedExercise, exercise] 
      setAddedExercise(newCart)
  }

  const clickedBtn = (breakTime) => { 
   storageAdded(breakTime.btn)
    setBreakTime(breakTime.btn)
}

useEffect(() => {
  const savedData = storageExercises()
  for (const key in savedData) {
      setBreakTime(key)
  }
}, []);


    const notify = () => toast("Congratulation!");

    return (
        <div>
         <div className='container'>
            <div>
      
      
<div className='exercise ml-7'>
    {
        exercises.map(exercise=><Exercise key ={exercise.id} exercise ={exercise} addToDetail={addToDetail} >
        </Exercise>)
    }

</div>        
 </div>

 <div className= 'mt-5  bg-white rounded'>
   <div>
<div  class=" ml-7  mb-7 mt-3  mr-6" >
<Info></Info>
</div>
<div>
  <h2 className='font-bold text-xl mb-4 text-left ml-7'>Add a Break</h2>
  <BreakTime clickedBtn={ clickedBtn}></BreakTime>
  <ExerciseDetails addedExercise={addedExercise} saveBreakTime={saveBreakTime}></ExerciseDetails>
</div>

<div>
<button  onClick={notify} class="btn  mb-7 ml-4">Activity Complete</button>
</div>
    </div>
   </div>
  </div>
  <ToastContainer />
</div>

    );
};

export default Exercises;