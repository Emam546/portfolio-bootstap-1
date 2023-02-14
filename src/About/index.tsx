import "./style.css";
export function About() {
    return (
        <div className="about-stuff p-section pb-0">
            <div className="container">
                <div className="special-heading pt-3 pb-5 text-center">
                    <img className="mb-4" src="./images/title.png" alt="" />
                    <h1>Some Stuff About Us</h1>
                    <p className="text-black-50 text-uppercase">
                        THE GREAT TEAM
                    </p>
                </div>
                <p className="description text-center m-auto mb-5 text-black-50 fs-6">
                    Donec rutrum congue leo eget malesuada. Mauris blandit
                    aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque
                    in ipsum id orci porta dapibus. Proin eget tortor risus.
                    Donec sollicitudin molestie malesuada.
                </p>
                <div className="row">
                    <div className="col-lg-4 mb-4 text-center text-md-start">
                        <h2>Retina Design</h2>
                        <p className="text-black-50 fs-6">
                            Vestibulum ac diam sit amet quam vehicula elementum
                            sed sit amet dui. Mauris blandit aliquet elit, eget
                            tincidunt nibh pulvinar a.
                        </p>
                        <p className="text-black-50 fs-6">
                            Donec rutrum congue leo eget malesuada. Mauris
                            blandit aliquet elit, eget tincidunt nibh pulvinar
                            a. Pellentesque in ipsum id orci porta dapibus.
                            Proin eget tortor risus. Donec sollicitudin molestie
                            malesuada.
                        </p>
                        <a
                            className="p-2 ps-3 pe-3 btn btn-primary primary rounded-pill text-uppercase"
                            href="#"
                        >
                            Order Me One
                        </a>
                    </div>
                    <div className="col-lg-8">
                        <img
                            src="./images/laptop.png"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
