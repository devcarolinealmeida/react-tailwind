import React from 'react';
import Button from '../Button';

const Form = () => {
    return ( 
        <div>
            <label className='text-sm'>Email:</label>
            <input className='text-sm' type="email" placeholder='Enter your email' />
            <Button />
        </div>
     );
}
 
export default Form;