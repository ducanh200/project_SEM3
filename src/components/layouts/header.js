import Top from "./home/top";
import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user,setUser] = useState({email:"",password:""});

    useEffect(() => {
        // Kiểm tra nếu có token trong localStorage để xác định trạng thái đăng nhập
        const token = localStorage.getItem("token");
        if (token) {
          setIsLoggedIn(true);
        }
      }, []); // Chỉ chạy một lần sau khi component mount

    const handleInput = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const formSubmit = async (e)=>{
        e.preventDefault();
        try {
            console.log(user)
            const rs = await api.post(url.USER.LOGIN,user);
            const u = rs.data;
            const token = u.token;

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
            localStorage.setItem("token", token);
            setIsLoggedIn(true);
            navigate("/whatwedo");
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleLogout = () => {
        // Xóa token khỏi localStorage
        localStorage.removeItem("token");

        // Xóa token khỏi header của axios
        delete api.defaults.headers.common["Authorization"];

        // Cập nhật trạng thái đăng nhập
        setIsLoggedIn(false);

        navigate("/");

    };

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
                                <li className="menu-item menu-item-has-children greennature-normal-menu"><a href='/news' className="sf-with-ul-pre"><i className="fa fa-file-text-o"></i>News</a></li>
                                <li className="menu-item menu-item-has-children greennature-normal-menu"><a href='/whatwedo' className="sf-with-ul-pre"><i className="fa fa-file-text-o"></i>What we do</a>
                                </li>
                                <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-mega-menu"><a href='/topic' className="sf-with-ul-pre">filter</a>
                                    <div className="sf-mega">
                                    </div>
                                </li>
                                <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-normal-menu"><a href='/aboutus' className="sf-with-ul-pre">About us</a>
                                </li>
                            </ul>
                            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                
                    </div>
                    
                    {isLoggedIn ? (
                        // Nếu đăng nhập, hiển thị nút LOGOUT
                        <a className="greennature-donate-button greennature-lb-payment" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                            <span className="greennature-button-overlay"></span>
                            <span className="greennature-button-donate-text">LOGOUT</span>
                        </a>
                    ) : (
                        // Nếu chưa đăng nhập, hiển thị nút LOGIN
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" className="greennature-donate-button greennature-lb-payment" style={{ textDecoration: 'none' }}>
                            <span className="greennature-button-overlay"></span>
                            <span className="greennature-button-donate-text">LOGIN</span>
                        </a>
                    )}
                            

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
                            <div  class="modal-dialog" style={{border:"0px"}}>
                                <div style={{backgroundColor:"#dddddd"}} class="modal-content">
                                <div class="modal-header" style={{borderBottom:"0"}}>
                                    <h2><b style={{color:"rgb(93, 194, 105)",marginLeft:"190px"}}>LOGIN</b></h2>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div style={{background:"rgba(255, 255, 255, 0)"}} class="modal-body">
                                <form onSubmit={formSubmit} style={{textAlign:"left",background:"rgba(255, 255, 255, 0)"}}>
                                        {/* <div class="mb-3"
                                        <label for="recipient-name" class="col-form-label" ><b style={{color:"#b0b0b0",marginLeft:"32px"}}>NAME<span style={{color:"red"}}>*</span></b></label>
                                        <input required style={{width:"400px",marginLeft:"7%",borderRadius:"0",background:"rgba(255, 255, 255, 0.4)"}} placeholder="Your Name" type="text" class="form-control" id="name"/>
                                    </div> */}
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label"><b style={{color:"#b0b0b0",marginLeft:"32px"}}>EMAIL<span style={{color:"red"}}>*</span></b></label>
                                        <input type="email" onChange={handleInput} name="email" required style={{width:"400px",marginLeft:"7%",borderRadius:"0",background:"rgba(255, 255, 255, 0.4)"}} placeholder="Your Email"  class="form-control" id="email"></input>
                                    </div>

                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label"><b style={{color:"#b0b0b0",marginLeft:"32px"}}>PASSWORD<span style={{color:"red"}}>*</span></b></label>
                                        <input type="password" onChange={handleInput} name="password" required style={{width:"400px",marginLeft:"7%",borderRadius:"0",background:"rgba(255, 255, 255, 0.4)"}} placeholder="Your Password"  class="form-control" id="password"></input>
                                    </div>
                                    
                                    {/* <div  class="greennature-payment-amount">
                                    <div  class="greennature-payment-amount-head" style={{color:"#b0b0b0",marginLeft:"32px"}}>Donate for project or fund ! <span style={{color:"red"}}>*</span></div>                     
                                    <input style={{width:"400px",background:"rgba(255, 255, 255, 0.4)",marginLeft:"32px"}}  class="greennature-payment-price-fill" type="text" placeholder="Your Amount(USD)" />
                                    <input class="greennature-payment-price" type="hidden" name="amount" value="10" />
                                    <div className="style-method" style={{marginTop:"20px"}}>
                                    
                                    </div>
                                    </div> */}

                                <div class="modal-footer" style={{borderTop:"0"}}>
                                    <button type="submit" style={{width:"200px",borderRadius:"20px",marginRight:"25.75%",backgroundColor:"rgb(93, 194, 105)",height:"40px"}} class="btn btn-primary"><h3>LOGIN</h3></button>
                                </div>

                                    </form>

                                    <div className="abcde">
                                        <h4 style={{textAlign:"center"}}>You haven't account?/<a href="/register">Register here</a></h4>
                                    </div>
                                </div>
                                

                            </div>
                            </div>
            </div>
            </div>
</body>
  )
}

export default Header;
