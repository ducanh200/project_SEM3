import Footer from "./footer";
import Header from "./header";
import Top from "./home/top";
import Sidebar from "./home/sidebar";

function Layout({children}) {
    return (
        <>
        <Header/>
        <div>{children}</div>
        <Footer/>
        </>
       
    )
}

export default Layout;