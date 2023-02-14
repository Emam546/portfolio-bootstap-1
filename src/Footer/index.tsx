import "./style.css"
export default function Footer() {
    return (
        <footer className="footer dark-bg p-section text-white-50 text-center text-md-start">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <img
                            src="./images/logo.png"
                            alt=""
                            className="img-fluid"
                        />
                        <p>
                            Pellentesque in ipsum id orci porta dapibus. Vivamus
                            magna justo, lacinia eget consectetur sed, convallis
                            at tellus.
                        </p>
                        <p className="mt-5">
                            Created By{" "}
                            <span className="green-color">Graphberry</span>
                            <br />© 2022 -{" "}
                            <span className="yellow-color">Bondi Inc</span>
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <h4 className="text-light">Links</h4>
                        <ul className="list-unstyled">
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Home</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Our Services</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Portfolio</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Testimonials</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Support</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Terms and Condition</li></a>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <h4 className="text-light">About Us</h4>
                        <ul className="list-unstyled">
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Sign In</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Register</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">About Us</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Blog</li></a>
                            <a href="#" className="text-decoration-none text-white-50"><li className="mt-2">Contact Us</li></a>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <h4 className="text-light">Contact Us</h4>
                        <p className="lh-lg mt-3 mb-5">Get in touch with us via mail phone.
                            We are waiting for your call or message
                        </p>
                        <a href="#" className="btn btn-primary primary rounded-pill d-block fs-5">graphberry@gmail.com</a>
                        <div className="social-icons fs-4 d-flex gap-3 align-items-center mt-5 flex-wrap">
                            <a href="#" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#" className="youtube"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
