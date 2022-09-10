import React from 'react';
import { BsFillBellFill } from 'react-icons/bs'


const Container = () => {
    return ( 
        <section className='bg-white font-roboto'>
            <div>
                <BsFillBellFill size={70}/>
            </div>
            <div>
                <h1>Newsletter</h1>
                <p>A newsletter of Development articles, news and cool projects</p>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" placeholder='Enter your email' />
                <button type="button">Subscribe!</button>
            </div>
        </section>
     );
}
 
export default Container;