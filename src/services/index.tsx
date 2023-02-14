import "./style.css";
export function Services() {
    return (
        <div className="services text-center p-section">
            <div className="container">
                <div className="special-heading pt-3 pb-5">
                    <img className="mb-4" src="./images/title.png" alt="" />
                    <h1>We are Good at</h1>
                    <p className="text-black-50 text-uppercase">
                        some of these stuff Under
                    </p>
                </div>
                <div className="row">
                    <div className="feat col-lg-4 col-md-6">
                        <div className="icon-holder position-relative">
                            <i className="fa-solid fa-1 position-absolute bottom-0 number section-color"></i>
                            <i className="fa-solid fa-pen-ruler position-absolute bottom-0 icon green-color"></i>
                        </div>
                        <div className="text-container pt-2">
                            <h1 className="text-uppercase yellow-color">Graphic design</h1>
                            <p className="text-black-50 lh-lg">
                                Pellentesque in ipsum id orci porta dapibus. Vivamus
                                magna justo, lacinia eget consectetur sed, convallis
                                at tellus.
                            </p>
                        </div>
                    </div>
                    <div className="feat col-lg-4 col-md-6">
                        <div className="icon-holder position-relative">
                            <i className="fa-solid fa-2 position-absolute bottom-0 number section-color"></i>
                            <i className="fa-solid fa-tv position-absolute bottom-0 icon green-color"></i>
                        </div>
                        <div className="text-container pt-2">
                            <h1 className="text-uppercase yellow-color">Graphic design</h1>
                            <p className="text-black-50 lh-lg">
                                Pellentesque in ipsum id orci porta dapibus. Vivamus
                                magna justo, lacinia eget consectetur sed, convallis
                                at tellus.
                            </p>
                        </div>
                    </div>
                    <div className="feat col-lg-4 col-md-6">
                        <div className="icon-holder position-relative">
                            <i className="fa-solid fa-3 position-absolute bottom-0 number section-color"></i>
                            <i className="fa-solid fa-plug position-absolute bottom-0 icon green-color"></i>
                        </div>
                        <div className="text-container pt-2">
                            <h1 className="text-uppercase yellow-color">Graphic design</h1>
                            <p className="text-black-50 lh-lg">
                                Pellentesque in ipsum id orci porta dapibus. Vivamus
                                magna justo, lacinia eget consectetur sed, convallis
                                at tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
