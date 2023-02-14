import { useState } from "react";
import "./style.css";
export function Choose() {
    function Ele({ name }: { name: string }) {
        return (
            <li
                className={`${name == state && "active"}`}
                onClick={() => setState(name)}
            >
                {name}
            </li>
        );
    }
    const [state, setState] = useState("All");
    return (
        <ul className="choose-section list-unstyled d-flex justify-content-center flex-wrap gap-2 align-items-center fs-5 mt-4 mb-5">
            <Ele name="All"/>
            <Ele name="Design"/>
            <Ele name="Code"/>
            <Ele name="Photo"/>
            <Ele name="App"/>
        </ul>
    );
}
export default function OurProjects() {
    return (
        <div className="our-projects section-bg p-section">
            <div className="container">
                <div className="special-heading pt-3 pb-5 text-center">
                    <img className="mb-4" src="./images/title.png" alt="" />
                    <h1>We Make This</h1>
                    <p className="text-black-50 text-uppercase">
                        PREPARE TO BE AMAZED
                    </p>
                </div>
                <Choose />
                <div className="images-container row">
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white p-1">
                        <div className="box position-relative overflow-hidden" data-work="Applications">
                            <img src="./images/work-01.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white p-1">
                        <div className="box position-relative overflow-hidden" data-work="Applications">
                            <img src="./images/work-02.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white p-1">
                        <div className="box position-relative overflow-hidden" data-work="Applications">
                            <img src="./images/work-03.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white p-1">
                        <div className="box position-relative overflow-hidden" data-work="Applications">
                            <img src="./images/work-04.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white p-1">
                        <div className="box position-relative overflow-hidden" data-work="Applications">
                            <img src="./images/work-05.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white p-1">
                        <div className="box position-relative overflow-hidden" data-work="Applications">
                            <img src="./images/work-06.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white p-1">
                        <div className="box position-relative overflow-hidden" data-work="Applications">
                            <img src="./images/work-07.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white p-1">
                        <div className="box position-relative overflow-hidden" data-work="Applications">
                            <img src="./images/work-08.jpg" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
