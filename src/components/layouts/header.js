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
                        <div className="greennature-responsive-navigation dl-menuwrapper" id="greennature-responsive-navigation">
                            <button className="dl-trigger">Open Menu</button>
                        </div>
                    </div>

                    <div className="greennature-navigation-wrapper">
                        <nav className="greennature-navigation" id="greennature-main-navigation">
                            <ul id="menu-main-menu-1" className="sf-menu greennature-main-menu">
                                <li className="menu-item menu-item-home current-menu-item greennature-normal-menu"><a href='/'><i className="fa fa-home"></i>Home</a></li>
                                <li className="menu-item menu-item-has-children greennature-normal-menu"><a href='/whatwedo' className="sf-with-ul-pre"><i className="fa fa-file-text-o"></i>What we do</a>
                                </li>
                                <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-mega-menu"><a href='/topic' className="sf-with-ul-pre"><i className="fa fa-globe"></i>Topic</a>
                                    <div className="sf-mega">
                                    </div>
                                </li>
                                <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-normal-menu"><a href='/aboutus' className="sf-with-ul-pre">About us</a>
                                </li>
                            </ul>
                            <a className="greennature-donate-button greennature-lb-payment"><span className="greennature-button-overlay"></span><span className="greennature-button-donate-text">Donate</span></a>

                        </nav>
                        <div className="greennature-navigation-gimmick" id="greennature-navigation-gimmick"></div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
</header>
</div>
</body>
  )
}

export default Header;
