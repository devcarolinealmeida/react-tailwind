import React from 'react';
import Content from '../Content/index'
import Form from '../Form/index'

import Bell from '../Bell';
import EffectBell from '../Bell/EffectBell';


const Container = () => {
    return ( 
        <section className='bg-white font-roboto p-10 flex flex-col items-center justify-center gap-6 rounded-lg lg:w-1/2 lg:rounded-l-none'>
            <div className='relative group'>
                <EffectBell />
                <Bell />
            </div>
            <Content />
            <Form />
        </section>
     );
}
 
export default Container;