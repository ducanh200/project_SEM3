import Top from "./home/top";

function Header() {
  return(
    <body data-rsssl="1" className="home page-template-default page page-id-5680 _masterslider _msp_version_3.2.7 woocommerce-no-js">
    <div className="body-wrapper  float-menu" data-home="https://demo.goodlayers.com/greennature/">
    <header className="greennature-header-wrapper header-style-5-wrapper greennature-header-with-top-bar">

    <div id="greennature-header-substitute"></div>
    <div className="greennature-header-inner header-inner-header-style-5">
        <div className="greennature-header-container container">
            <div className="greennature-header-inner-overlay"></div>
     
            <div className="clear"></div>
        </div>
    </div>
    <div id="greennature-header-substitute"></div>
            <div className="greennature-header-inner header-inner-header-style-5" style={{ position: "fixed",top:"0",left:"0",right:"right",width:"100%"}}>
                <div className="greennature-header-container container">
                    <div className="greennature-header-inner-overlay"></div>
                    <div className="greennature-logo">
                        <div className="greennature-logo-inner">
                            <a href='/'>
                                <img src="images/logo.png" alt="" /> </a>
                        </div>
                    </div>

                    <div className="greennature-navigation-wrapper">
                        <nav className="greennature-navigation" id="greennature-main-navigation">
                            <ul id="menu-main-menu-1" className="sf-menu greennature-main-menu">
                                <li className="menu-item menu-item-has-children greennature-normal-menu"><a href='/'><i className="fa fa-home"></i>Home</a></li>
                                <li className="menu-item menu-item-has-children greennature-normal-menu"><a href='/whatwedo' className="sf-with-ul-pre"><i className="fa fa-file-text-o"></i>What we do</a>
                                </li>
                                <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-mega-menu"><a href='/topic' className="sf-with-ul-pre"><i className="fa fa-globe"></i>Topic</a>
                                    <div className="sf-mega">
                                    </div>
                                </li>
                                <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-normal-menu"><a href='/aboutus' className="sf-with-ul-pre">About us</a>
                                </li>
                            </ul>
                            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                
                    </div>
                            <a  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" className="greennature-donate-button greennature-lb-payment" style={{ textDecoration: 'none' }}><span className="greennature-button-overlay"></span><span className="greennature-button-donate-text">Donate</span></a>
                            

                        </nav>
                        <div className="greennature-navigation-gimmick" id="greennature-navigation-gimmick"></div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>


</header>
</div>
<div className="donate" >
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginTop:"50px"}}>
                            <div  class="modal-dialog" style={{border:"1px #7287a2 solid",borderRadius:"10px"}}>
                                <div style={{backgroundImage:"url('https://tecwoodoutdoorfloor.com/upload/images/Blog/xanh-ngoc-luc-bao.jpg')"}} class="modal-content">
                                <div class="modal-header" style={{borderBottom:"0"}}>
                                    <h2><b style={{color:"rgb(93, 194, 105)",marginLeft:"160px"}}>Donation</b></h2>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div style={{background:"rgba(255, 255, 255, 0)"}} class="modal-body">
                                    <form style={{textAlign:"center",background:"rgba(255, 255, 255, 0)"}}>
                                        <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label" ><b style={{color:"white"}}>NAME<span style={{color:"red"}}>*</span></b></label>
                                        <input required style={{width:"400px",marginLeft:"7%",borderRadius:"0",background:"rgba(255, 255, 255, 0.4)"}} placeholder="Your Name" type="text" class="form-control" id="name"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label"><b style={{color:"white"}}>EMAIL<span style={{color:"red"}}>*</span></b></label>
                                        <input required style={{width:"400px",marginLeft:"7%",borderRadius:"0",background:"rgba(255, 255, 255, 0.4)"}} placeholder="Your Email" type="text" class="form-control" id="email"></input>
                                    </div>
                                    
                                    <div  class="greennature-payment-amount">
                                    <div  class="greennature-payment-amount-head" style={{color:"white"}}>Donate for project or fund !</div>                     
                                    <input style={{width:"400px",background:"rgba(255, 255, 255, 0.4)"}}  class="greennature-payment-price-fill" type="text" placeholder="Your Amount(USD)" />
                                    <input class="greennature-payment-price" type="hidden" name="amount" value="10" />
                                    <div className="style-method" style={{marginTop:"20px"}}>
                                    <label for="paypal">                        
                                        <input name="donate" type="radio" id="paypal" value="PAYPAL"/>
                                        <span class="checkmark"></span>
                                        <b style={{color:"white"}}>  Paypal</b>    
                                    </label>
                                    <br></br>
                                    <br></br>
                                    <label for="vnpay">                        
                                        <input name="donate" type="radio" id="vnpay" value="VNPAY"/>
                                        <span class="checkmark"></span>
                                       <b style={{color:"white"}}> VN-Pay</b>
                                    </label>
                        </div>
                    </div>
                                    </form>
                                </div>
                                <div class="modal-footer" style={{borderTop:"0"}}>
                                    <button style={{width:"300px",borderRadius:"20px",marginRight:"17.75%",backgroundColor:"rgb(93, 194, 105)"}} type="button" class="btn btn-primary">Donate</button>
                                </div>

                            </div>
                            </div>
            </div>
            </div>
</body>
  )
}

export default Header;
