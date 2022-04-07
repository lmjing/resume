import Title from "./Title";

function Skill(props) {
    const {data} = props;

    return (
        <section>
            <Title text="Skills"/>
            <ul>
                {
                    Object.keys(data).map(key => {
                        const skills = data[key].join(',');

                        return (
                            <li key={key}>{key}: {skills}</li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Skill