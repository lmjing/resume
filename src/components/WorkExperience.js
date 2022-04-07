import Title from "./Title";
import Project from "./Project";
import {useEffect, useState} from "react";

function WorkExperience(props) {
    // TODO 우선은 경력 단일항목이라 아래와 같이 처리 - 추후 develop
    const kt = props.datas[0];
    const {job, dates, projects} = kt;

    const [startDt, setStartDt] = useState('현재');
    const [endDt, setEndDt] = useState('현재');

    useEffect(() => {
        setStartDt(dates[0]);
        if (dates[1]) setEndDt(dates[1]);
    }, [dates])

    const ktProjects = projects.map((project, i) => {
        return <Project key={i} data={project}/>
    })

    return (
        <section id="work-experience">
            <Title text="Work Experience"/>
            <article>
                <header>
                    <h3>KT</h3>
                    <p>{job}</p>
                    <p className="date">{startDt} - {endDt}</p>
                </header>
                <div className="content">
                    {ktProjects}
                </div>
            </article>
        </section>
    )
}

export default WorkExperience;