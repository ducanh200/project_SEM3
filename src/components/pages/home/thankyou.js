import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
function Thankyou(){
    return(
        <section>
            <Header></Header>
            <section className="vh-100 bg-image">
                <div style={{backgroundImage: "url('upload/act-bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: "15px", marginTop:"200px", marginBottom:"150px"}}>
                            <div className="card-body p-5" style={{marginTop: "25px", marginBottom: "25px"}}>
                            <h1 className="text-uppercase text-center mb-3">Thank you for donating to the project!</h1>
                            <h3 className="text-center mb-5">You have successfully donated</h3>
                                <div className="d-flex justify-content-center">
                                    <a style={{borderRadius: "15px", width: "180px", height:"50px", padding:"14px 27px", backgroundColor:"#5dc269", border:"none", textTransform:"uppercase", fontWeight:"600", letterSpacing:"1px"}} href="/" className="btn btn-primary text-center">back to home</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <Footer></Footer>
            </section>
        </section>
    )
}
export default Thankyou;