import React from 'react';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div>
          <div className='text-center text-5xl mt-5 text-green-800'>
            <h2> <FontAwesomeIcon icon={faDumbbell} color></FontAwesomeIcon> WorkoutStep</h2>
          </div>
        </div>
    );
};

export default Header;