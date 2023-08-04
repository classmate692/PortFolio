import React from 'react';
import Typewriter from "typewriter-effect";
import './Runningtext.css';

function Runningtext() {
    return (
        <div className="runtext">
            <Typewriter
                options={{
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("I'm Software Developer")
                        .pauseFor(2000) // Increase the pause duration to 2 seconds
                        .deleteChars(18)
                        .typeString("Frontend Developer")
                        .pauseFor(2000) // Increase the pause duration to 2 seconds
                        .deleteChars(18)
                        .typeString("Software Developer")
                        .start();
                }}
            />
        </div>
    );
}

export default Runningtext;
