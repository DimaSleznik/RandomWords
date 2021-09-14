import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { shuffle } from '../../functions';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { path } from '../../constans';
import useInterval from '@use-it/interval';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './style.css';
export const List = () => {
    const History = useHistory();
    const timer_key = uuidv4();
    const interval = useSelector((state) => state.Words.timeIterval);
    const intervalValue = interval.interval * 1000 || null;
    const currentListPosition = localStorage.getItem('current_list');
    const list = JSON.parse(localStorage.getItem('words_lists'))[currentListPosition];
    const listName = list.list_name;
    const initial_list = list.words;
    const [wordList, setList] = useState({
        list: shuffle(initial_list),
        word: shuffle(initial_list)[0],
        currentPos: 0
    });
    useInterval(() => {

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
    }, intervalValue);

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
                {interval.interval !== 0 &&
                    <div className="cirle-timer"> <CountdownCircleTimer

                        key={timer_key}
                        isPlaying
                        duration={intervalValue / 1000}
                        colors={[
                            ['#004777', 0.33],
                            ['#F7B801', 0.33],
                            ['#A30000', 0.33],

                        ]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer></div>


                }
                {interval.interval === 0 && <button onClick={handleclick} className='next-word'>Следующее слово</button>}
            </div>
            <div className="list-actions">
                <button onClick={handleclickDelete}>удалить список</button>
                <button onClick={() => History.push({ pathname: path.changeList })}>Редактировать список</button>
            </div>
        </div >
    )
}