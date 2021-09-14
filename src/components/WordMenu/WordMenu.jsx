import React from 'react';
import './style.css';
import { path } from '../../constans';
import { useHistory } from 'react-router';
export const WordMenu = () => {
    const Words = JSON.parse(localStorage.getItem('words_lists')) || [];
    const History = useHistory();
    const HandleClickLink = (index) => (event) => {
        event.preventDefault();
        localStorage.setItem('current_list', index);
        History.push({ pathname: path.list });
    }
    return (
        <div className='WordMenu'>
            <button onClick={() => History.push(path.createList)}>Добавить список</button>
            <div className='lists'>
                {Words.map((elem, index) => (<div className='container' key={elem.list_name} onClick={HandleClickLink(index)}>{elem.list_name}</div>))}
            </div>
        </div>
    )
}