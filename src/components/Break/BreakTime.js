import React from 'react';
import './BreakButton.css'
const BreakTime = ({ clickedBtn }) => {
    const buttons = [10, 20, 30, 40, 50]
    return (
        <div>
             <div className='break-btn ml-3 mr-3 border-2 border-rose-500'>
            {buttons.map(btn => <button onClick={() => clickedBtn({ btn })}>{btn}</button>)}
        </div>
        </div>
    );
};

export default BreakTime;