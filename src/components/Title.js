import './Title.scss'

export default function Title(props) {
    const {text} = props;

    return (
        <h1 className="title">
            {text}
            <span className="dot">.</span>
        </h1>
    );
}