import "./style.css"
export default function NavBar(){
    return <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container">
        <a className="navbar-brand" href="#">
            <img src="./images/logo.png" alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav list-unstyled ms-auto">
                <li className="nav-item p-1 p-lg-3">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item p-1 p-lg-3">
                    <a className="nav-link" aria-current="page" href="#">Services</a>
                </li>
                <li className="nav-item p-1 p-lg-3">
                    <a className="nav-link" aria-current="page" href="#">PortFolio</a>
                </li>
                <li className="nav-item p-1 p-lg-3">
                    <a className="nav-link" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item p-1 p-lg-3">
                    <a className="nav-link" aria-current="page" href="#">Contact</a>
                </li>
            </ul>
            <div className="search d-none d-lg-block">
                <i className="fa-solid fa-magnifying-glass ps-3 pe-3"></i>
            </div>
            <a href="#" className="btn primary rounded-pilled mt-2 mt-lg-0" >Login</a>
        </div>
    </div>
    </nav>
}