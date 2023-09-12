import React from 'react';

const Bookmak = ({bookmark}) => {
    const{title}=bookmark
    return (
        <div className='bg-slate-200 p-4 m-'>
            <h2>{title}</h2>
        </div>
    );
};

export default Bookmak;