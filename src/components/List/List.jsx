import React from 'react';
import { useState, useEffect } from 'react';
import { shuffle } from '../../functions';
import { Timer } from '../Timer';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { path } from '../../constans';
import './style.css';
export const List = () => {
    const History = useHistory();
    const interval = useSelector((state) => state.Words.timeIterval);
    const currentListPosition = localStorage.getItem('current_list');
    const list = JSON.parse(localStorage.getItem('words_lists'))[currentListPosition];
    const listName = list.list_name;
    const initial_list = list.words;
    const [wordList, setList] = useState({
        list: shuffle(initial_list),
        word: shuffle(initial_list)[0],
        currentPos: 0
    });
    useEffect(() => {
        if (interval.interval !== 0) {
            setTimeout(() => {
                console.log('hallo')
                if (wordList.currentPos === wordList.list.length - 1) {
                    setList({
                        list: shuffle(initial_list),
                        word: shuffle(initial_list)[0],
                        currentPos: 0
                    })
                }
                else {
                    setList((state) => ({
                        ...state,
                        word: state.list[state.currentPos + 1],
                        currentPos: state.currentPos + 1
                    }));
                }
            }, interval.interval * 1000);
        }

    }, [wordList.currentPos, initial_list, interval.interval, wordList.list.length])
    function handleclick() {
        if (wordList.currentPos === wordList.list.length) {
            console.log('work_ex')
            setList((state) => ({ ...state, list: shuffle(state.list), currentPos: 0 }))
        }
        setList((state) => ({ ...state, word: state.list[state.currentPos], currentPos: state.currentPos + 1 }))
    }
    function handleclickDelete() {
        let lists = JSON.parse(localStorage.getItem('words_lists'));
        lists.splice(currentListPosition, 1);
        let new_lists = JSON.stringify(lists);
        localStorage.setItem('words_lists', new_lists)
        History.push({ pathname: path.main })

    }
    return (
        <div className='word-menu'>
            <div className="list-name">{listName}</div>
            <div className="current-word-menu">
                <span className='currentWord'>{wordList.word}</span>
                {interval.interval !== 0 && <Timer timer={interval.interval}></Timer>}
                {interval.interval === 0 && <button onClick={handleclick} className='next-word'>Следующее слово</button>}
            </div>
            <div className="list-actions">
                <button onClick={handleclickDelete}>удалить список</button>
                <button onClick={() => History.push({ pathname: path.changeList })}>Редактировать список</button>
            </div>
        </div>
    )
}