import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";

function CreateProject(){
    return(
        <LayoutAdmin>
        
        <form action="" method="post" enctype="multipart/form-data" style={{width: "700px",float: "none",margin: "auto",height:"670px"}} >
        <div class="form-group"  >
            <h2 style={{textAlign: "center"}}>Create a new product</h2>
        </div>
        <div class="form-group" >
            <div class="form-create" style={{float: "left",marginRight: "100px"}}>
            <label for="exampleFormControlInput1">Name</label>
            <input name="name" type="text"  class="form-control" placeholder="" style={{width: "300px",backgroundColor: "#dcdcdc",color: "black"}} />
            </div>
            <div class="form-create" style={{float: "left",marginRight: "100px"}}>
            <label for="exampleFormControlInput1">Price</label>
            <input name="price" type="number"  class="form-control" placeholder="" style={{width: "150px",backgroundColor: "#dcdcdc",color: "black"}}/>
            </div>
        </div>

        <div class="form-group" style={{marginTop: "100px"}}>
            <label for="exampleFormControlFile1">Thumbnail</label>
            <br></br>
            <input style={{backgroundColor: "#dcdcdc",color: "black"}} type="file" name="thumbnail" class="form-control-file" id="exampleFormControlFile1"/>
        </div>

        <div class="form-group">
            <div class="form-create_2" style={{float: "left",marginRight: "50px"}}> <label for="exampleFormControlInput1">Discount</label>
                <input name="discount" type="number"  class="form-control" placeholder="" style={{width: "150px",backgroundColor: "#dcdcdc",color: "black"}}/></div>
            <div class="form-create_2" style={{float: "left",marginRight: "50px"}}>  <label for="exampleFormControlInput1">Qty</label>
                <input name="qty" type="number"  class="form-control" placeholder="" style={{width: "150px",backgroundColor: "#dcdcdc",color: "black"}}/></div>
            <div class="form-create_2" style={{float: "left",marginRight: "50px"}}> <label for="exampleFormControlInput1">Category</label>
                <select name="category_id" class="form-control" style={{width: "150px",backgroundColor: "#dcdcdc",color: "black"}}>
                        <option value="{{$item->id}}"></option>      
                </select></div>

        </div>
        <div class="form-group" style={{marginTop: "100px"}}>
            <label for="exampleFormControlInput1">Description</label>
            <textarea style={{height: "200px",backgroundColor: "#dcdcdc",color: "black"}} class="form-control" name="description"></textarea>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Create</button>
        </div>
    </form>
    </LayoutAdmin>
    )
}
export default CreateProject;