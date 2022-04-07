import Title from "./Title";
import Project from "./Project";
import {useEffect, useState} from "react";

function WorkExperience(props) {
    // TODO 우선은 경력 단일항목이라 아래와 같이 처리 - 추후 develop
    const kt = props.datas[0];
    const {job, dates, projects} = kt;

    const [startDt, setStartDt] = useState( '현재');
    const [endDt, setEndDt] = useState( '현재');

    useEffect(() => {
        setStartDt(dates[0]);
        if (dates[1]) setEndDt(dates[1]);
    }, [dates])

    const ktProjects = projects.map((project, i) => {
        return <Project key={i} data={project}/>
    })

    return (
        <section>
            <Title text="Work Experience"/>
            <header>
                <h2>KT</h2>
                <p>{job}</p>
                <p className="date">{startDt} - {endDt}</p>
            </header>
            {ktProjects}
        </section>
    )
}

export default WorkExperience;