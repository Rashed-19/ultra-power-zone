import React from 'react';

const ExerciseDetails = ({ total, saveBreakTime }) => {
    return (
        <div>
            <div>
            <div className=" ml-7 mb-7">

<div className='flex'>
    <h2 className='text-xl font-bold mt-5'>Exercise Time: </h2>
    <small className='text-xl  mt-5'>
    {total}  Minutes
    </small>
</div>

<div className='flex'>
    <h2 className='text-xl font-bold mt-5'>Break Time:  </h2>
    <small className='text-xl  mt-5'>
    {  saveBreakTime } seconds
    </small>
</div>
</div>
            </div>
        </div>
    );
};

export default ExerciseDetails;