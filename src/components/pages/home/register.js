import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
function Register(){
    return(
        <section>
            <Header></Header>
            <section className="vh-100 bg-image" style={{marginBottom: "400px"}}>
                <div style={{backgroundImage: "url('upload/act-bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: "15px", marginTop:"150px", marginBottom:"50px"}}>
                            <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            <form>
                                <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example1cg">Your Name</label>
                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example3cg">Your Email</label>
                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example4cg">Password</label>
                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                </div>

                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className="form-outline mb-4" style={{width: "275px"}}>
                                    <label className="form-label" for="form3Example4cdg">Phone</label>
                                    <input type="text" id="form3Example4cdg" className="form-control form-control-lg" />
                                    </div>

                                    <div className="form-outline mb-4" style={{width: "275px"}}>
                                    <label className="form-label" for="form3Example4cdg">City</label>
                                    <input type="text" id="form3Example4cdg" className="form-control form-control-lg" />
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example4cdg">Address</label>
                                <input type="text" id="form3Example4cdg" className="form-control form-control-lg" />
                                </div>


                                <div className="d-flex justify-content-center">
                                    <input style={{borderRadius: "15px"}} type="submit" value="Submit My Voice!" class="wpcf7-form-control wpcf7-submit" />
                                </div>

                                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#"
                                    className="fw-bold text-body"><u style={{textDecoration:"none"}}>Login here</u></a></p>

                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer></Footer>
        </section>
    )
}
export default Register;