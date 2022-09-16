import React from 'react';

const Button = (props) => {
    return ( 
        <>
            <button className='font-bold text-white bg-secondary w-full py-2 rounded-full shadow-2xl hover:bg-hover duration-300' type="submit">{props.text}</button>
        </>
     );
}
 
export default Button;