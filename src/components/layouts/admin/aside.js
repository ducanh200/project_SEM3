

function Aside(){
    return(
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="index.html" aria-expanded="false"><i className="mdi me-2 mdi-gauge"></i><span
                                    className="hide-menu">Dashboard</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="pages-profile.html" aria-expanded="false">
                                <i className="mdi me-2 mdi-account-check"></i><span className="hide-menu">Profile</span></a>
                        </li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="table-basic.html" aria-expanded="false"><i className="mdi me-2 mdi-table"></i><span
                                    className="hide-menu">Table</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="icon-material.html" aria-expanded="false"><i
                                    className="mdi me-2 mdi-emoticon"></i><span className="hide-menu">Icon</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="map-google.html" aria-expanded="false"><i className="mdi me-2 mdi-earth"></i><span
                                    className="hide-menu">Google Map</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="pages-blank.html" aria-expanded="false"><i
                                    className="mdi me-2 mdi-book-open-variant"></i><span className="hide-menu">Blank</span></a>
                        </li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="pages-error-404.html" aria-expanded="false"><i className="mdi me-2 mdi-help-circle"></i><span
                                    className="hide-menu">Error 404</span></a>
                        </li>

                    </ul>

                </nav>
            </div>
            <div className="sidebar-footer">
                <div className="row">
                    <div className="col-4 link-wrap">
                        <a href="" className="link" data-toggle="tooltip" title="" data-original-title="Settings"><i
                                className="ti-settings"></i></a>
                    </div>
                    <div className="col-4 link-wrap">
                        <a href="" className="link" data-toggle="tooltip" title="" data-original-title="Email"><i
                                className="mdi mdi-gmail"></i></a>
                    </div>
                    <div className="col-4 link-wrap">
                        <a href="" className="link" data-toggle="tooltip" title="" data-original-title="Logout"><i
                                className="mdi mdi-power"></i></a>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default Aside;
