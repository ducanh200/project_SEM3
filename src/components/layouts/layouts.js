import Footer from "./footer";
import Header from "./header";
import Top from "./home/top";
import Sidebar from "./home/sidebar";
import Other from "./other";

function Layout({children}) {
    return (
        <>
        <Header/>
        <div>{children}</div>
        <Other/>
        <Footer/>
        </>
       
    )
}

export default Layout;