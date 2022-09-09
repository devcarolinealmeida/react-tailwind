import React from 'react';
import { BsFillBellFill } from 'react-icons/bs'


const Container = () => {
    return ( 
        <section>
            <div className='bg-white'>
                <BsFillBellFill size={30}/>
                <h1>Newsletter</h1>
                <p>A newsletter of Development articles, news and cool projects</p>
            </div>
        </section>
     );
}
 
export default Container;