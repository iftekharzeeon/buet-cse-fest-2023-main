import React from 'react';

function WaveDesign(props) {
    return (
        <svg className={`absolute w-full ${props.position}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 170.68 1440 149.32"><path fill={!!props.color?props.color:"#ffffff"} fillOpacity="1" d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"/></svg>
    );
}

export default WaveDesign;