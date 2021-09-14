import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from '../../store';
import './style.css';
export const Options = () => {
    const interval = useSelector((state) => state.Words.timeIterval);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const time = event.currentTarget['time'].value;
        const useInterval = event.currentTarget['use_time'].checked;
        dispatch(profileActions.setTimeOpitions({ interval: time, useInterval }))
        console.log(event.currentTarget['use_time'].checked)

    }
    return (
        <div className="options">
            <p>Настройки</p>
            <form onSubmit={handleSubmit}>
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" name='use_time' defaultChecked={interval.useInterval} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Использовать таймер?
                </label>
                <input type="number" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" name='time' />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Применить</button>
            </form>

        </div>
    )
}