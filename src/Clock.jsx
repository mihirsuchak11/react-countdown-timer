import React, { useEffect, useState } from 'react'

const Clock = ({ deadline }) => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(() => getTimeUntil(deadline), 1000);
    })

    const leading0 = (num) => num < 10 ? '0' + num : num;

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor((time / (1000 * 60 * 60 * 24)));

        setDays(days);
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds);
    }

    return (
        <div>
            <div className="clock-days">{leading0(days)} days</div>
            <div className="clock-hours">{leading0(hours)} hours</div>
            <div className="clock-minutes">{leading0(minutes)} minutes</div>
            <div className="clock-seconds">{leading0(seconds)} seconds</div>
        </div>
    )
}

export default Clock
