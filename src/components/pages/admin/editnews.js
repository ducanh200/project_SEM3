import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";

function EditNews(){
    return(
        <LayoutAdmin>
        <div className="page-breadcrumb">
                <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">Edit a New</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active" aria-current="page">List New</li>
                                    <li className="breadcrumb-item active" aria-current="page">Detail New</li>
                                    <li className="breadcrumb-item active" aria-current="page">Edit a New</li>
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
                    <h2 style={{textAlign: "center", marginTop: "15px"}}>Edit A New</h2>
                </div>
                <div class="form-group" style={{marginTop: "20px"}} >
                    <div class="form-create" style={{float: "left",marginRight: "100px"}}>
                    <label for="exampleFormControlInput1">Name</label>
                    <input name="name" type="text"  class="form-control" placeholder="" style={{width: "250px",backgroundColor: "#ffffff",color: "black", border: "1px solid #000000"}} />
                    </div>
                    <div class="form-create" style={{float: "left",marginRight: "100px"}}>
                    <label for="exampleFormControlInput1">City</label>
                    <input name="name" type="text"  class="form-control" placeholder="" style={{width: "250px",backgroundColor: "#ffffff",color: "black", border: "1px solid #000000"}} />
                    </div>
                </div>

                <div class="form-group" style={{marginTop: "100px"}}>
                    <label for="exampleFormControlFile1">Thumbnail</label>
                    <br></br>
                    <input style={{backgroundColor: "#ffffff",color: "black", border: "1px solid #000000"}} type="file" name="thumbnail" class="form-control-file" id="exampleFormControlFile1"/>
                </div>

                <div class="form-group" style={{marginTop: "20px"}} >
                    <div class="form-create_2" style={{float: "left",marginRight: "100px"}}> <label for="exampleFormControlInput1">Country</label>
                        <select name="country_id" class="form-control" style={{width: "250px",backgroundColor: "#ffffff",color: "black", border: "1px solid #000000"}}>
                            <option value="{{$item->id}}"></option>      
                        </select>
                        </div>
                    <div class="form-create_2" style={{float: "left",marginRight: "100px"}}> <label for="exampleFormControlInput1">Topic</label>
                        <select name="topic_id" class="form-control" style={{width: "250px",backgroundColor: "#ffffff",color: "black", border: "1px solid #000000"}}>
                            <option value="{{$item->id}}"></option>      
                        </select>
                    </div>
                </div>

                <div class="form-group" style={{marginTop: "100px"}}>
                    <label for="exampleFormControlInput1">Description</label>
                    <textarea style={{width: "600px", height: "200px",backgroundColor: "#ffffff",color: "black", border: "1px solid #000000"}} class="form-control" name="description"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
                </form>
            </div>
        </div>
    </LayoutAdmin>
    )
}
export default EditNews;