import React from 'react';
import Button from '../Button';

const Form = () => {
    return ( 
        <div>
            <label className='text-sm font-bold text-gray-700'>Email:</label>
            <input className='text-sm w-full' type="email" placeholder='Enter your email' />
            <Button />
        </div>
     );
}
 
export default Form;