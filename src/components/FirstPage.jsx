import React from "react";


function FirstPage(props) {

    return (
        <div className="first-page">
        <div>
            <svg className="blob1" height="200" width="200">
                <circle cx="80" cy="80" r="50" fill="#DEEBF8" />
                <circle cx="120" cy="80" r="50" fill="#DEEBF8" />
                <circle cx="150" cy="80" r="50" fill="#DEEBF8" />
                <circle cx="150" cy="120" r="50" fill="#DEEBF8" />
                <circle cx="100" cy="100" r="50" fill="#DEEBF8" />
            </svg>
        </div>
        <div>
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={props.start}>Start Quiz</button>
        </div>
        <div>
            <svg className="blob2" height="200" width="200">
                <circle cx="80" cy="80" r="50" fill="#FFFAD1" />
                <circle cx="120" cy="80" r="50" fill="#FFFAD1" />
                <circle cx="150" cy="80" r="50" fill="#FFFAD1" />
                <circle cx="150" cy="120" r="50" fill="#FFFAD1" />
                <circle cx="100" cy="100" r="50" fill="#FFFAD1" />
            </svg>
        </div>
        </div>
    )
}

export default FirstPage;