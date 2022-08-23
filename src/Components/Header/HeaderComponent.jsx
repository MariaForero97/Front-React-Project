import React, { useState } from 'react';
//import video1 from '../../Files/video1.mp4';
//import video2 from '../../Files/video2.mp4';
//import video3 from '../../Files/video3.mp4';
//import video4 from '../../Files/video4.mp4';
function HeaderComponent(props) {

    const [video, setVideo] = useState(0);

    /*const urls = [
        video1,
        video2,
        video3,
        video4,
    ];*/

    const handleEnded = (e) => {
        setVideo(Math.round(Math.random() * (3 - 0)));
    }

    return (
        <React.Fragment>
            <header className="masthead viewport-header">
                <video id="background-video bgvid" loop muted autoPlay onEnded={handleEnded}>
                   
                </video>

                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>{(props.USER_CONNECTED && Object.entries(props.USER_CONNECTED).length > 0) ? "Bienvenidos" : ""}</h1>
                                <span className="subheading" id="title-page">{(props.USER_CONNECTED && Object.entries(props.USER_CONNECTED).length > 0) ? "Conectado como: " + props.USER_CONNECTED.name : ""}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export { HeaderComponent };
