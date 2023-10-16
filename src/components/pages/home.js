import Layout from "../layouts/layouts";
import Sidebar from "../layouts/home/sidebar";
import Nav from "../layouts/home/nav";
import Breadcumb from "../layouts/home/breadcumb";
import Project from "../layouts/home/project";
import Info from "../layouts/home/info";

function Home() {
    return (
        <Layout>
        <div class="with-sidebar-wrapper">
        <Sidebar/>
        <Breadcumb/>
        <Nav />
        <Project/>
        <Info/>
        </div>
        </Layout>
    )
}

export default Home;