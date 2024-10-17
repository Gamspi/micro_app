import React from 'react';
import './style.css'

const Core = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('submit');
    }
    return <>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='test'/>
            <button type='submit'>submit</button>
        </form>
    </>;
};

export default Core;