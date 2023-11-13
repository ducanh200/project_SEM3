import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
function Donate() {
    return (
        <section>
            <Header></Header>
            <section className="vh-100 bg-image" style={{ marginBottom: "200px" }}>
                <div style={{ backgroundImage: "url('upload/act-bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ borderRadius: "15px", marginTop: "150px", marginBottom: "50px", width: "500px", marginLeft: "125px" }}>
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center" style={{marginBottom:"30px"}}>Donate</h2>
                                            <div>
                                                <div className="greennature-item greennature-portfolio-item greennature-classic-portfolio">
                                                    <div className="greennature-ux greennature-classic-portfolio-ux">
                                                        <div className="portfolio-classic-content">
                                                            <h3 className="portfolio-title" style={{marginLeft:"90px", marginBottom:"20px"}}><b style={{color:"green"}}>Elephant Sanctuary</b></h3>
                                                        </div>
                                                        <div className="portfolio-thumbnail greennature-image"><img src="upload/shutterstock_133689230-400x300.jpg" alt="" width="400" height="300" /><span className="portfolio-overlay">&nbsp;</span><a className="portfolio-overlay-icon" href="#"><span className="portfolio-icon" ><i className="fa fa-link" ></i></span></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: "50px" }}>
                                                <form>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form3Example1cg">Donate for project!</label>
                                                        <input type="decimal" id="form3Example1cg" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <input style={{ borderRadius: "15px" }} type="submit" value="Donate for project" class="wpcf7-form-control wpcf7-submit" />
                                                    </div>
                                                </form>
                                            </div>
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
export default Donate;