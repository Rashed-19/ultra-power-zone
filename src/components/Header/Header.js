import React from 'react';
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <div>
          <div className='text-left mt-5 flex '>
<div>
  <img style={{height:'90px'}} src={logo} alt="" />
</div>
<div>
<h2 className='text-5xl mt-4 font-bold text-green-500'>WorkoutStep</h2>
</div>
           
          </div>
          <p className='text-2xl text-left ml-4 mt-4 text-green-500'>Exercise list</p>
        </div>
    );
};

export default Header;