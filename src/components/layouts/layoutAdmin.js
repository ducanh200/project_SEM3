import Header from "./admin/header";
import Aside from "./admin/aside";
import Breadcrumb from "./admin/breadcrumb";
function LayoutAdmin({children}){
    return(
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <>
        <Header/>
        <Aside/>
        <div class="page-wrapper">
        <div>{children}</div>
        </div>
        </>
        </div>
    )
}
export default LayoutAdmin;