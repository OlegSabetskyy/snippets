import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <h1>About page</h1>
            <Link to="/">Index</Link> <Link to="/test">Test</Link>
        </>
    );
};

export default About;
