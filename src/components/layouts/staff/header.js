

function Header_staff(){
    return(

        <header className="topbar" data-navbarbg="skin6">
           <nav className="navbar top-navbar navbar-expand-md navbar-dark" style={{backgroundColor:"#5dc269"}}>
                <div className="navbar-header" data-logobg="skin6" style={{backgroundColor:"#5dc269"}}>

                    <a className="navbar-brand ms-4" href="staff/projects" style={{backgroundColor:"#5dc269"}}>
                        <b className="logo-icon">

                            <img src="../assets/images/logo-light-icon.png" alt="homepage" className="dark-logo" />

                        </b>

                        <span className="logo-text">
                            <img src="../assets/images/logo-light-text.png" alt="homepage" className="dark-logo" />

                        </span>
                    </a>

                    <a className="nav-toggler waves-effect waves-light text-white d-block d-md-none"
                        href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                </div>

                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    <ul className="navbar-nav d-lg-none d-md-block ">
                        <li className="nav-item">
                            <a className="nav-toggler nav-link waves-effect waves-light text-white "
                                href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                        </li>
                    </ul>

                    <ul className="navbar-nav me-auto mt-md-0 ">


                        <li className="nav-item search-box">
                            <form className="app-search" style={{display: "none"}}>
                                <input type="text" className="form-control" placeholder="Search &amp; enter"/> <a
                                    className="srh-btn"><i className="ti-close"></i></a> </form>
                        </li>
                    </ul>


                    <ul className="navbar-nav">

                        <li className="nav-item dropdown">

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header_staff;