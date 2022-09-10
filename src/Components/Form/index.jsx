import React from 'react';

const Form = () => {
    return ( 
        <div>
            <label className='text-sm'>Email:</label>
            <input className='text-sm' type="email" placeholder='Enter your email' />
            <button type="button">Subscribe!</button>
        </div>
     );
}
 
export default Form;