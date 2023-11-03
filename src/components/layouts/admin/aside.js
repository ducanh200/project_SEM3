

function Aside(){
    return(
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="admin/" aria-expanded="false"><i className="mdi me-2 mdi-gauge"></i><span
                                    className="hide-menu">Dashboard</span></a></li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="admin/projects" aria-expanded="false">
                                <i className="mdi me-2 mdi-account-check"></i><span className="hide-menu">Projects</span></a>
                        </li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="admin/news" aria-expanded="false"><i className="mdi me-2 mdi-table"></i><span
                                    className="hide-menu">News</span></a>
                        </li>
                    </ul>

                </nav>
            </div>
        </aside>
    )
}
export default Aside;
