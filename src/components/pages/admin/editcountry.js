import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";

function Admin_Editcountry(){
    return(
        <LayoutAdmin>
        <div className="page-breadcrumb">
                <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">Edit a Country</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active" aria-current="page">List Country</li>
                                    <li className="breadcrumb-item active" aria-current="page">Detail Country</li>
                                    <li className="breadcrumb-item active" aria-current="page">Edit a Country</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{marginTop: "20px", marginLeft: "20px", marginRight:"20px", marginBottom:"20px"}}>
            <div className="card-bory">
                <form action="" method="post" enctype="multipart/form-data" style={{width: "700px",float: "none",margin: "auto",height:"670px"}} >
                <div class="form-group"  >
                    <h2 style={{textAlign: "center", marginTop: "15px"}}>Edit A Country</h2>
                </div>
                
                <div class="form-group" style={{marginTop: "50px", marginLeft: "200px"}} >
                    <div class="form-create" style={{float: "left",marginRight: "100px"}}>
                    <label for="exampleFormControlInput1">Name</label>
                    <input name="name" type="text"  class="form-control" placeholder="" style={{width: "300px",backgroundColor: "#ffffff",color: "black", border: "1px solid #000000"}} />
                    </div>
                </div>

                <div class="form-group" style={{marginTop: "140px", marginLeft: "200px"}}>
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
                </form>
            </div>
        </div>
    </LayoutAdmin>
    )
}
export default Admin_Editcountry;