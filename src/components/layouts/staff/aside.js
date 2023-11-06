

function Aside_staff(){
    return(
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">

                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="pages-profile.html" aria-expanded="false">
                                <i className="mdi me-2 mdi-account-check"></i><span className="hide-menu">Profile</span></a>
                        </li>
                        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="table-basic.html" aria-expanded="false"><i className="mdi me-2 mdi-table"></i><span
                                    className="hide-menu">Table</span></a></li>


                    </ul>

                </nav>
            </div>
        </aside>
    )
}
export default Aside_staff;
