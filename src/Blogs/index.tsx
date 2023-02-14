import "./style.css"
export function Blogs(){
    return <div className="blogs p-section">
        <div className="container">
            <div className="special-heading pt-3 pb-5 text-center">
                <img className="mb-4" src="./images/title.png" alt="" />
                <h1>Read Our Blog</h1>
                <p className="text-black-50 text-uppercase">
                    NEW STORIES
                </p>
            </div>
            <div className="row align-items-stretch">
                <div className="col-md-6 col-lg-4 p-1">
                    <div className="card">
                        <img src="./images/blog-1.jpg" alt="" className="w-100" />
                        <div className="p-3">
                            <p className="text-black-50 fs-6 m-0">Jan 17, 2022</p>
                            <h4 className="mt-1 mb-1">Some Awesome Blog Title Here</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 p-1">
                    <div className="card">
                        <img src="./images/blog-2.jpg" alt="" className="w-100" />
                        <div className="p-3">
                            <p className="text-black-50 fs-6 m-0">Jan 17, 2022</p>
                            <h4 className="mt-1 mb-1">Some Awesome Blog Title Here</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 p-1">
                    <div className="card">
                        <img src="./images/blog-3.jpg" alt="" className="w-100" />
                        <div className="p-3">
                            <p className="text-black-50 fs-6 m-0">Jan 17, 2022</p>
                            <h4 className="mt-1 mb-1">Some Awesome Blog Title Here</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <a href="#" className="btn btn-primary primary rounded-pill fs-5">MORE STORIES</a>
            </div>
        </div>
    </div>
}