

import Header_staff from "./staff/header";
import Aside_staff from "./staff/aside";
import Breadcrumb from "./admin/breadcrumb";
function LayoutStaff({children}){
    return(
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <>
        <Header_staff/>
        <Aside_staff/>
        <div class="page-wrapper">
        <div>{children}</div>
        </div>
        </>
        </div>
    )
}
export default LayoutStaff;