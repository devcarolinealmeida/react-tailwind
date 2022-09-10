import React from 'react';
import Content from '../Content/index'
import Form from '../Form/index'

import { BsFillBellFill } from 'react-icons/bs'


const Container = () => {
    return ( 
        <section className='bg-white font-roboto'>
            <div>
                <BsFillBellFill size={70}/>
            </div>
            <Content />
            <Form />
        </section>
     );
}
 
export default Container;