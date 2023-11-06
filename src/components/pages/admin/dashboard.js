import Header from "../../layouts/admin/header";
import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";
function Dashboard(){
    return(
        <LayoutAdmin>
            <Breadcrumb/>
            <div className="page-breadcrumb">
                <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">Dashboard</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ marginTop: "25px"}}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <div>
                                                <h3 className="card-title">Sales Overview</h3>
                                                <h6 className="card-subtitle">Ample Admin Vs Pixel Admin</h6>
                                            </div>
                                            <div className="ms-lg-auto mx-sm-auto mx-lg-0">
                                                <ul className="list-inline d-flex">
                                                    <li className="me-4">
                                                        <h6 className="text-success"><i
                                                                className="fa fa-circle font-10 me-2 "></i>Ample</h6>
                                                    </li>
                                                    <li>
                                                        <h6 className="text-info"><i
                                                                className="fa fa-circle font-10 me-2"></i>Pixel</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="amp-pxl" style={{height: "360px"}}>
                                            <div className="chartist-tooltip"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Our Visitors </h3>
                                <h6 className="card-subtitle">Different Devices Used to Visit</h6>
                                <div id="visitor"
                                        style={{height: "290px", width: "100%", maxHeight: "290px", position: "relative"}}
                                    className="c3">
                                    <div className="c3-tooltip-container"
                                        style={{position: "absolute", pointerEvents: "none", display: "none"}}>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr className="mt-0 mb-0"/>
                            </div>
                            <div className="card-body text-center ">
                                <ul className="list-inline d-flex justify-content-center align-items-center mb-0">
                                    <li className="me-4">
                                        <h6 className="text-info"><i className="fa fa-circle font-10 me-2 "></i>Mobile</h6>
                                    </li>
                                    <li className="me-4">
                                        <h6 className=" text-primary"><i className="fa fa-circle font-10 me-2"></i>Desktop</h6>
                                    </li>
                                    <li className="me-4">
                                        <h6 className=" text-success"><i className="fa fa-circle font-10 me-2"></i>Tablet</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-xlg-3">
                        <div className="card">
                            <img className="card-img-top" src="../assets/images/background/profile-bg.jpg"
                                alt="Card image cap"/>
                            <div className="card-body little-profile text-center">
                                <div className="pro-img"><img src="../assets/images/users/4.jpg" alt="user"/></div>
                                <h3 className="mb-0">Angela Dominic</h3>
                                <p>Web Designer &amp; Developer</p>
                                <a href="javascript:void(0)"
                                    className="mt-2 waves-effect waves-dark btn btn-primary btn-md btn-rounded">Follow</a>
                                <div className="row text-center mt-3">
                                    <div className="col-lg-4 col-md-4 mt-3">
                                        <h3 className="mb-0 font-light">1099</h3><small>Articles</small>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mt-3">
                                        <h3 className="mb-0 font-light">23,469</h3><small>Followers</small>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mt-3">
                                        <h3 className="mb-0 font-light">6035</h3><small>Following</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body bg-info">
                                <h4 className="text-white card-title">My Contacts</h4>
                                <h6 className="card-subtitle text-white mb-0 op-5">Checkout my contacts here</h6>
                            </div>
                            <div className="card-body">
                                <div className="message-box contact-box">
                                    <h2 className="add-ct-btn"><button type="button"
                                            className="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                    </h2>
                                    <div className="message-widget contact-widget">
                                        <a href="#" className="d-flex align-items-center">
                                            <div className="user-img mb-0"> <img src="../assets/images/users/1.jpg"
                                                    alt="user" className="img-circle"/> <span
                                                    className="profile-status online pull-right"></span> </div>
                                            <div className="mail-contnet">
                                                <h5 className="mb-0">Pavan kumar</h5> <span
                                                    className="mail-desc">info@wrappixel.com</span>
                                            </div>
                                        </a>
                                        <a href="#" className="d-flex align-items-center">
                                            <div className="user-img mb-0"> <img src="../assets/images/users/2.jpg"
                                                    alt="user" className="img-circle"/> <span
                                                    className="profile-status busy pull-right"></span> </div>
                                            <div className="mail-contnet">
                                                <h5 className="mb-0">Sonu Nigam</h5> <span
                                                    className="mail-desc">pamela1987@gmail.com</span>
                                            </div>
                                        </a>
                                        <a href="#" className="d-flex align-items-center">
                                            <div className="user-img mb-0"> <span className="round">A</span> <span
                                                    className="profile-status away pull-right"></span> </div>
                                            <div className="mail-contnet">
                                                <h5 className="mb-0">Arijit Sinh</h5> <span
                                                    className="mail-desc">cruise1298.fiplip@gmail.com</span>
                                            </div>
                                        </a>
                                        <a href="#" className="d-flex align-items-center">
                                            <div className="user-img mb-0"> <img src="../assets/images/users/4.jpg"
                                                    alt="user" className="img-circle"/> <span
                                                    className="profile-status offline pull-right"></span> </div>
                                            <div className="mail-contnet">
                                                <h5 className="mb-0">Pavan kumar</h5> <span
                                                    className="mail-desc">kat@gmail.com</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-xlg-9">
                        <div className="card">
                            <ul className="nav nav-tabs profile-tab" role="tablist">
                                <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#home"
                                        role="tab">Activity</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#profile"
                                        role="tab">Profile</a> </li>
                                <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#settings"
                                        role="tab">Settings</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="home" role="tabpanel">
                                    <div className="card-body">
                                        <div className="profiletimeline border-start-0">
                                            <div className="sl-item">
                                                <div className="sl-left"> <img src="../assets/images/users/1.jpg" alt="user"
                                                        className="img-circle"/> </div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John Doe</a> <span className="sl-date">5
                                                            minutes ago</span>
                                                        <p>assign a new task <a href="#"> Design weblayout</a></p>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 mb-3"><img
                                                                    src="../assets/images/big/img1.jpg" alt="user"
                                                                    className="img-responsive radius w-100"/></div>
                                                            <div className="col-lg-3 col-md-6 mb-3"><img
                                                                    src="../assets/images/big/img2.jpg" alt="user"
                                                                    className="img-responsive radius w-100"/></div>
                                                            <div className="col-lg-3 col-md-6 mb-3"><img
                                                                    src="../assets/images/big/img3.jpg" alt="user"
                                                                    className="img-responsive radius w-100"/></div>
                                                            <div className="col-lg-3 col-md-6 mb-3"><img
                                                                    src="../assets/images/big/img4.jpg" alt="user"
                                                                    className="img-responsive radius w-100"/></div>
                                                        </div>
                                                        <div className="like-comm"> <a href="javascript:void(0)"
                                                                className="link me-2">2
                                                                comment</a> <a href="javascript:void(0)"
                                                                className="link me-2"><i
                                                                    className="fa fa-heart text-danger"></i> 5 Love</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="sl-item">
                                                <div className="sl-left"> <img src="../assets/images/users/2.jpg" alt="user"
                                                        className="img-circle"/> </div>
                                                <div className="sl-right">
                                                    <div> <a href="#" className="link">John Doe</a> <span className="sl-date">5
                                                            minutes ago</span>
                                                        <div className="mt-3 row">
                                                            <div className="col-md-3 col-xs-12"><img
                                                                    src="../assets/images/big/img1.jpg" alt="user"
                                                                    className="img-responsive w-100 radius"/></div>
                                                            <div className="col-md-9 col-xs-12">
                                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                    elit. Integer nec odio. Praesent libero. Sed cursus
                                                                    ante dapibus diam. </p> <a href="#"
                                                                    className="btn btn-success text-white"> Design
                                                                    weblayout</a>
                                                            </div>
                                                        </div>
                                                        <div className="like-comm mt-3"> <a href="javascript:void(0)"
                                                                className="link me-2">2 comment</a> <a
                                                                href="javascript:void(0)" className="link me-2"><i
                                                                    className="fa fa-heart text-danger"></i> 5 Love</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="sl-item">
                                                <div className="sl-left"> <img src="../assets/images/users/3.jpg" alt="user"
                                                        className="img-circle"/> </div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John Doe</a> <span className="sl-date">5
                                                            minutes ago</span>
                                                        <p className="mt-2"> Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Integer nec odio. Praesent libero. Sed
                                                            cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                                                            elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                                            Fusce nec tellus sed augue semper </p>
                                                    </div>
                                                    <div className="like-comm mt-3"> <a href="javascript:void(0)"
                                                            className="link me-2">2
                                                            comment</a> <a href="javascript:void(0)"
                                                            className="link me-2"><i className="fa fa-heart text-danger"></i>
                                                            5 Love</a> </div>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="sl-item">
                                                <div className="sl-left"> <img src="../assets/images/users/4.jpg" alt="user"
                                                        className="img-circle"/> </div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John Doe</a> <span className="sl-date">5
                                                            minutes ago</span>
                                                        <blockquote className="mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmod tempor incididunt
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="profile" role="tabpanel">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Full Name</strong>
                                                <br></br>
                                                <p className="text-muted">Johnathan Deo</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Mobile</strong>
                                                <br></br>
                                                <p className="text-muted">(123) 456 7890</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6 b-r"> <strong>Email</strong>
                                                <br></br>
                                                <p className="text-muted">johnathan@admin.com</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6"> <strong>Location</strong>
                                                <br></br>
                                                <p className="text-muted">London</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <p className="mt-4">Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                            dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus
                                            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                                            porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries </p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets
                                            containing Lorem Ipsum passages, and more recently with desktop publishing
                                            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h4 className="font-medium mt-4">Skill Set</h4>
                                        <hr></hr>
                                        <h5 className="d-flex mt-4">Wordpress <span className="ms-auto">80%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="80"
                                                aria-valuemin="0" aria-valuemax="100" style={{width:"80%", height:"6px"}}>
                                                <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        <h5 className="d-flex mt-4">HTML 5 <span className="ms-auto">90%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90"
                                                aria-valuemin="0" aria-valuemax="100" style={{width:"90%", height:"6px"}}>
                                                <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        <h5 className="d-flex mt-4">jQuery <span className="ms-auto">50%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="50"
                                                aria-valuemin="0" aria-valuemax="100" style={{width:"50%", height:"6px"}}>
                                                <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                        <h5 className="d-flex mt-4">Photoshop <span className="ms-auto">70%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="70"
                                                aria-valuemin="0" aria-valuemax="100" style={{width:"70%", height:"6px"}}>
                                                <span className="sr-only">50% Complete</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="settings" role="tabpanel">
                                    <div className="card-body">
                                        <form className="form-horizontal form-material mx-2">
                                            <div className="form-group">
                                                <label className="col-md-12">Full Name</label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="Johnathan Doe"
                                                        className="form-control form-control-line ps-0"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="example-email" className="col-md-12">Email</label>
                                                <div className="col-md-12">
                                                    <input type="email" placeholder="johnathan@admin.com"
                                                        className="form-control form-control-line ps-0" name="example-email"
                                                        id="example-email"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Password</label>
                                                <div className="col-md-12">
                                                    <input type="password" value="password"
                                                        className="form-control form-control-line ps-0"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Phone No</label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="123 456 7890"
                                                        className="form-control form-control-line ps-0"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Message</label>
                                                <div className="col-md-12">
                                                    <textarea rows="5"
                                                        className="form-control form-control-line ps-0"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12">Select Country</label>
                                                <div className="col-sm-12 border-bottom">
                                                    <select className="form-select shadow-none border-0 form-control-line ps-0">
                                                        <option>London</option>
                                                        <option>India</option>
                                                        <option>Usa</option>
                                                        <option>Canada</option>
                                                        <option>Thailand</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <button className="btn btn-success text-white">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}
export default Dashboard;