import "./style.css"
export default function Subscribe(){
    return <div className="subscribe p-section yellow-bg dark-color text-center text-md-start">
        <div className="container">
            <form action="" className="row align-items-center">
                <div className="col-md-6 col-lg-3 p-2 mb-sm-4 mb-md-0">
                    <h3 className="fw-bold">
                        Subscribe to our Newsletter:
                    </h3>
                </div>
                <div className="col-md-6 col-lg-7 p-2 mb-sm-4 mb-md-0">
                    <input type="email"
                    placeholder="Enter Email Address"
                    className="ps-2 pb-2 fs-4 w-100"/>
                </div>
                <div className="col-md-6 col-lg-2 mt-3">
                    <input type="submit" value="Subscribe" 
                    className="btn btn-primary primary rounded-pill fs-5 dark-bg yellow-color" />
                </div>
            </form>
        </div>
    </div>
}