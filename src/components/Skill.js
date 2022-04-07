import './Skill.scss'
import Title from "./Title";

function Skill(props) {
    const {data} = props;

    const skillBadges = (skills) => {
        return (
            skills.map(skill => {
                const {name, color, logoColor} = skill
                return <img className="badge" alt={name} key={name}
                            src={`https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${name}&logoColor=${logoColor}`}/>
            })
        )
    }

    return (
        <section>
            <Title text="Skills"/>
            {
                Object.keys(data).map(key => {
                    const skills = data[key];

                    return (
                        <div key={key}>
                            <h3>{key}</h3>
                            {skillBadges(skills)}
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Skill