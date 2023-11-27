import Layout from "../../layouts/layouts";
import Sidebar from "../../layouts/home/sidebar";
import Breadcumb from "../../layouts/home/breadcumb";

function Home() {
    return (
        <Layout>
        <div class="with-sidebar-wrapper">
        <Sidebar/>
        <Breadcumb/>
        </div>
        </Layout>
    )
}

export default Home;