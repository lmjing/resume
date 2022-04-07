export default function Title(props) {
    const {text, sub} = props;

    const classes = `title ${sub && 'sub'}`;

    return (
        <h2 className={classes}>
            {text}
            <span className="dot">.</span>
        </h2>
    );
}