import Header from "../../layouts/staff/header";
import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb_staff from "../../layouts/staff/breadcrumb";
import LayoutStaff from "../../layouts/layoutStaff";
function Staff_topic(){
    return(
        <LayoutStaff>
            <div className="page-breadcrumb">
                <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">List Topic</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active" aria-current="page">List Topic</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-6 col-4 align-self-center">
                        <div className="text-end upgrade-btn">
                            <a href="staff/createtopic"
                                className="btn btn-danger d-none d-md-inline-block text-white">Create Topic</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ marginTop: "25px"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Topics</h4>
                                <div className="table-responsive">
                                    <table className="table user-table">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">#</th>
                                                <th className="border-top-0">First Name</th>
                                                <th className="border-top-0">Last Name</th>
                                                <th className="border-top-0">Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Deshmukh</td>
                                                <td>Prohaska</td>
                                                <td>@Genelia</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Deshmukh</td>
                                                <td>Gaylord</td>
                                                <td>@Ritesh</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Sanghani</td>
                                                <td>Gusikowski</td>
                                                <td>@Govinda</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Roshan</td>
                                                <td>Rogahn</td>
                                                <td>@Hritik</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Joshi</td>
                                                <td>Hickle</td>
                                                <td>@Maruti</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Nigam</td>
                                                <td>Eichmann</td>
                                                <td>@Sonu</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutStaff>
    )
}
export default Staff_topic;