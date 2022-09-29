import React from 'react';
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <div>
          <div className='text-left mt-5 flex ml-5'>
<div>
  <img style={{height:'90px'}} src={logo} alt="" />
</div>
<div>
<h2 className='text-5xl mt-4 font-bold text-green-500'>WorkoutStep</h2>
</div>
           
          </div>
        </div>
    );
};

export default Header;