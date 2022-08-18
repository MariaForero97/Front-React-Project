import React, { useState } from 'react';
function HeaderComponent() {

    const [video, setVideo] = useState(0);


    const handleEnded = (e) => {
        setVideo(Math.round(Math.random() * (3 - 0)));
    }

    return (
        <React.Fragment>
            <header className="masthead viewport-header">
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>Bienvenidos</h1>
                                <span className="subheading" id="title-page">Conectado como: Yo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export { HeaderComponent };
