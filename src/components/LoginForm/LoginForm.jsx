import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
export const LoginForm = () => {
    let History = useHistory();
    let [words, setWords] = useState([]);
    let isEmpty = words.length === 0;
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.currentTarget.closest('.form'))
        const list_name = event.currentTarget.closest('.form')['list_name'].value;
        const actual_list = JSON.parse(localStorage.getItem('words_lists')) || [];
        console.log(actual_list)
        actual_list.unshift({ list_name: list_name, words: words })
        localStorage.setItem('words_lists', JSON.stringify(actual_list));
        History.push('/');

    }

    const handlepress = (event) => {
        if (event.keyCode === 13) {
            console.log('helllllo')
            handleClick(event);
        }
    }
    const handleClick = (event) => {
        console.log(words);
        event.preventDefault();
        let word = event.currentTarget.closest('.form')['word'].value;
        if (word.length !== 0) setWords((state) => [...state, word]);
        event.currentTarget.closest('.form')['word'].value = '';
    }
    return (<div className='list-form'>


        <form className="form create-list">
            <div className="field" id='list-name'>Название списка<br></br><input type="text" name='list_name' autoComplete="off" /></div>
            <div className="field"><input type="text" name='word' autoComplete="off" onKeyDown={handlepress} /></div>
            <button type='button' onClick={handleClick} className='add-word'>Добавить слово</button>
            <br></br>
            <button type='button' className='add-list' onClick={handleSubmit}>Добавить список</button>
        </form>
        <div className='added'>Добавленные слова
            <ul className='added_list'>
                {isEmpty ? '' : words.map((elem, index) => <li key={uuidv4()}>{elem}</li>)}
            </ul>
        </div>
    </div>
    )


}