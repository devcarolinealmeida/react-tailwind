import React from 'react';
import IconMain from '../../images/icone-mergulhador.svg'

const ColumnLeft = () => {
    return ( 
        <section className="bg-secondary hidden lg:block p-8 w-1/2">
            <img className='m-auto' src={IconMain} alt="scuba diver" />
        </section>
     );
}
 
export default ColumnLeft;