import React, { useState } from 'react';

import Clock from './Clock';

export default function App() {

    const [deadline, setDeadline] = useState('March 15, 2020');
    const [newDeadline, setNewDeadline] = useState();

    const changeDeadline = () => {
        setDeadline(newDeadline)
    }

    const onChangeHandler = (e) => {
        setNewDeadline(e.target.value);
    }

    return (
        <div className="app">
            <div className="app-title">Countdown to {deadline}</div>
            <Clock deadline={deadline} />
            <div>
                <input onChange={onChangeHandler} placeholder="new date" />
                <button type="submit" onClick={() => changeDeadline()}>Submit</button>
            </div>
        </div>
    );
}
