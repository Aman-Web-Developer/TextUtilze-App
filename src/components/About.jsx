import React from 'react';

const About = (props) => {
    return (
        <>
            <div style={{ background: props.mode === "light" ? "#c8d6e5" : "#2a3642", color: props.mode === "light" ? "#2a3642" : "#c8d6e5" }} className="container p-4 rounded mt-5 d-flex flex-column justify-content-center align-items-center gap-3">
                <div className="jumbotron p-4 rounded">
                    <h1 className="display-4">About Page!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn" style={{ background: props.mode === "light" ? "#2a3642" : "#f9f9f9", color: props.mode === "light" ? "#f9f9f9" : "#2a3642" }} href="#" role="button">Learn more</a>
                </div>
            </div>
        </>
    );
}

export default About;