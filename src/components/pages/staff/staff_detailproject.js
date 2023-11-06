import LayoutAdmin from "../../layouts/layoutAdmin";
import LayoutStaff from "../../layouts/layoutStaff";


function Staff_detailproject(){
    return(
        <LayoutStaff>
            <div class="container invoice">
              <div class="invoice-header">
                <div class="ui left aligned grid">
                  <div class="row">
                    <div class="left floated left aligned six wide column">
                      <div class="ui">
                        <h1 class = "ui header pageTitle">Invoice <small class = "ui sub header">With Credit</small></h1>
                        <h4 class="ui sub header invDetails">NO: 554775/R1 | Date: 01/01/2015</h4>
                      </div>
                    </div>
                    <div class="right floated left aligned six wide column">
                      <div class="ui">
                        <div class="column two wide right floated">
                          <img class="logo" src="https://scontent.fmel5-1.fna.fbcdn.net/v/t1.0-9/10358691_1595827163984651_6845505980791568353_n.png?_nc_cat=109&_nc_ohc=We4wwT6M2Q0AX8qY8-b&_nc_ht=scontent.fmel5-1.fna&oh=69bd30fc152063c470afd928919c8734&oe=5E94664A" />
                          <ul class="">
                            <li><strong>RCJA Australia</strong></li>
                            <li>Lorem Ipsum</li>
                            <li>2 Alliance Lane VIC</li>
                            <li>info@rcja.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui segment cards">
                <div class="ui segment itemscard">
                  <div class="content">
                    <table class="ui celled table">
                      <thead>
                        <tr>
                          <th>Item / Details</th>
                          <th class="text-center colfix">Unit Cost</th>
                          <th class="text-center colfix">Sum Cost</th>
                          <th class="text-center colfix">Discount</th>
                          <th class="text-center colfix">Tax</th>
                          <th class="text-center colfix">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Lorem Ipsum Dolor
                            <br></br>
                            <small class="text-muted">The best lorem in town, try it now or leave forever</small>
                          </td>
                          <td class="text-right">
                            <span class="mono">$1,000.00</span>
                            <br></br>
                            <small class="text-muted">Before Tax</small>
                          </td>
                          <td class="text-right">
                            <span class="mono">$18,000.00</span>
                            <br></br>
                            <small class="text-muted">18 Units</small>
                          </td>
                          <td class="text-right">
                            <span class="mono">- $1,800.00</span>
                            <br></br>
                            <small class="text-muted">Special -10%</small>
                          </td>
                          <td class="text-right">
                            <span class="mono">+ $3,240.00</span>
                            <br></br>
                            <small class="text-muted">VAT 20%</small>
                          </td>
                          <td class="text-right">
                            <strong class="mono">$19,440.00</strong>
                            <br></br>
                            <small class="text-muted mono">$16,200.00</small>
                          </td>
                        </tr>


                      </tbody>
                    <tfoot class="full-width">

              </tfoot>
                    </table>

                  </div>
                </div>
                <div class="ui card">
                  <div class="content" style={{height:"125px",border:"0px solid black",background:"#eef5f9"}}>
                      <p>Mô tả </p>
                  </div>

                </div>
                <div className="more" style={{margin:"10px",backgroundColor:"#eef5f9", marginBottom: "15px"}}>
                      <a href="#" className="btn btn-primary">Edit</a>

                      <a style={{marginLeft:"20px"}} href="#" className="btn btn-primary">Delete</a>

                  </div>
              </div>
            </div>
        </LayoutStaff>
    )
}
export default Staff_detailproject;