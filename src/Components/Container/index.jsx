import React from 'react';
import Content from '../Content/index'

import { BsFillBellFill } from 'react-icons/bs'


const Container = () => {
    return ( 
        <section className='bg-white font-roboto'>
            <div>
                <BsFillBellFill size={70}/>
            </div>
            <Content />
            <div>
                <label>Email:</label>
                <input type="email" placeholder='Enter your email' />
                <button type="button">Subscribe!</button>
            </div>
        </section>
     );
}
 
export default Container;