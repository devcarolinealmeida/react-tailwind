import React from 'react';
import Button from '../Button';

const Form = () => {
    return ( 
        <div>
            <label className='text-sm font-bold text-gray-700 mb-2'>Email:</label>
            <input className='text-sm w-full mb-4 pl-2 py-2 rounded border shadow' type="email" placeholder='Enter your email' />
            <Button />
        </div>
     );
}
 
export default Form;