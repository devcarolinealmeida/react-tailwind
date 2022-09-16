import React from 'react';

const Content = (props) => {
    return ( 
        <div className='text-center w-full'>
            <h1 className='text-4xl text-secondary mb-2'>{props.title}</h1>
            <p className='text-xl text-gray-700 mb-2'>{props.paragraph}</p>
        </div>
     );
}
 
export default Content;