import './OtherExperience.scss'
import Title from "./Title";

function OtherExperience(props) {
    const {data} = props;

    const subJobs = (jobs) => {
        if (!jobs) return null;

        return (
            <ul>
                {
                    jobs.map((job, i) => <li key={i}>{job}</li>)
                }
            </ul>
        )
    }

    return (
        <section>
            <Title text="Other Experience"/>
            {
                Object.keys(data).map(key => {
                    const items = data[key];
                    return (
                        <article key={key}>
                            <Title sub text={key}/>
                            <ul>
                                {
                                    items.map((item, i) => {
                                        const {title, dates, jobs} = item;
                                        return (
                                            <li key={i}>
                                                <span className="title">{title}</span>
                                                <span className="date">{dates}</span>
                                                {subJobs(jobs)}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default OtherExperience;