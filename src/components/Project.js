import {useEffect, useState} from 'react';

export default function WorkExpProject(props) {
    const {data} = props;
    const {title, dates, jobs} = data;

    const [startDt, setStartDt] = useState( '현재');
    const [endDt, setEndDt] = useState( '현재');

    useEffect(() => {
        setStartDt(dates[0]);
        if (dates[1]) setEndDt(dates[1]);
    }, [dates])

    return (
        <div className="project">
            <h3>{title}</h3>
            <p className="date">{startDt} - {endDt}</p>
            <ul>
                {
                    jobs.map((item, i) => <li key={i}>{item}</li>)
                }
            </ul>
        </div>
    )
}