import './App.scss';
import data from './assets/data.json'
import WorkExperience from "./components/WorkExperience";
import OtherExperience from "./components/OtherExperience";
import Skill from "./components/Skill";
import Education from "./components/Education";

function App() {
    const {workExperience, otherExpeience, skills} = data;

    return (
        <div className="App">
            <main>
                <header id="header">
                    <div className="container">
                        <h1>
                            안녕하세요. <br/>
                            웹 프론트엔드 개발자 <br/>
                            <span className="name">이미정</span>입니다.
                        </h1>
                        <p className="introduce">
                            3년 차 개발자로 주로 웹 서비스를 개발하고 있습니다.
                            아름답고 견고한 인터페이스를 구현하는 것을 좋아합니다.
                            이를 통해 매력적인 사용자 경험을 도출할 수 있다고 생각하기 때문입니다.
                            효율적으로 함께 일할 수 있는 환경을 만들기 위해 노력합니다.
                        </p>
                    </div>
                </header>
                <WorkExperience datas={workExperience}/>
                <OtherExperience data={otherExpeience}/>
                <Skill data={skills}/>
                <Education/>
            </main>
        </div>
    );
}

export default App;
