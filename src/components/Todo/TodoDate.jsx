import { useEffect, useState } from 'react';
export const TodoDate = () => {
    const [dateTime, setDateTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const timing = new Date();
            const date = timing.toLocaleDateString();
            const time = timing.toLocaleTimeString();
            setDateTime(`${date} - ${time}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h2 className='date-time'>{dateTime}</h2>
        </>
    )
}