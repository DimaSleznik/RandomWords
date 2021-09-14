import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { path } from '../../constans';
export const Navbar = () => {
    const History = useHistory();
    const HandleClickLink = (path) => (event) => {
        event.preventDefault();
        History.push(path);
    }
    return (
        <div className='Navbar'>
            <a href='menu' onClick={HandleClickLink(path.main)} className='list-link'>Списки</a>
            <a href='options' onClick={HandleClickLink(path.options)} className='option-link'>Настройки</a>


        </div >
    )
}