import Layout from "../../layouts/layouts";
import projects from "../../data/projects";

function WhatWeDo() {
    return (
        <Layout>
            <div className="content-wrapper">
                <div className="greennature-content">
                    <div className="with-sidebar-wrapper">
                        <section id="content-section-1">
                            <div className="greennature-parallax-wrapper greennature-background-image gdlr-show-all greennature-skin-dark-skin" id="greennature-parallax-wrapper-1" data-bgspeed="0" style={{backgroundImage: "url('upload/about-title-bg.jpg')", paddingTop: "260px", paddingBottom: "140px" }}>
                                <div className="container">
                                    <div className="greennature-title-item">
                                        <div className="greennature-item-title-wrapper greennature-item  greennature-center greennature-extra-large ">
                                            <div className="greennature-item-title-container container">
                                                <div className="greennature-item-title-head">
                                                    <h3 className="greennature-item-title greennature-skin-title greennature-skin-border">WHAT WE DO ?</h3>
                                                    <div className="greennature-item-title-caption greennature-skin-info">Condimentum Ipsum Vestibulum</div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </section>
                    </div>
                </div>
                    <div className="clear">
                    </div>
            </div>
            
            <div className="content-wrapper" style={{backgroundColor: "#ffffff"}}>
                <div className="greennature-content">
                    <div className="with-sidebar-wrapper">
                        <div className="with-sidebar-container container">
                            <div className="with-sidebar-left twelve columns">
                                <div className="with-sidebar-content twelve columns">
                                    <section id="content-section-1">
                                        <div className="section-container container">
                                            <div className="blog-item-wrapper">
                                                <div className="blog-item-holder">
                                                    <div className="greennature-isotope" data-type="blog" data-layout="fitRows">
                                                        <div className="clear"></div>
                                                        {projects.map((project,index)=>(
                                                        <div className="four columns">
                                                        <div className="greennature-item greennature-blog-grid greennature-skin-box">
                                                            <div className="greennature-ux greennature-blog-grid-ux">
                                                                <article id="post-852" className="post-852 post type-post status-publish format-standard has-post-thumbnail hentry category-fit-row tag-blog tag-life-style">
                                                                    <div className="greennature-standard-style">
                                                                        <div className="greennature-blog-thumbnail">
                                                                            <a href="#"> <img src={project.thumbnail_1} alt="" style={{minWidth:"100%",minHeight:"100%"}} width="400" height="300" /></a>
                                                                        </div>

                                                                        <div className="greennature-blog-grid-content">
                                                                            <header className="post-header">
                                                                                <h3 className="greennature-blog-title"><a style={{textDecoration:"none"}} href="#">{project.name}</a></h3>

                                                                                <div className="greennature-blog-info">
                                                                                    <div className="blog-info blog-date greennature-skin-info"><i className="fa fa-clock-o"></i><a style={{textDecoration:"none"}} href="#">{project.begin}</a></div>
                                                                                    <div className="blog-info blog-comment greennature-skin-info"><i className="fa fa-money"></i><a style={{textDecoration:"none"}} href="##respond">{project.fund} <span className="greennature-tail" >Dollar</span></a></div>
                                                                                    <div className="clear"></div>
                                                                                </div>
                                                                                <div className="clear"></div>
                                                                            </header>
                                                                            
                                                                            <div className="greennature-blog-content">{project.description}
                                                                                <div className="clear"></div><a style={{textDecoration:"none",color:"#5dc269"}} href="#" className="excerpt-read-more">Read More</a></div>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                        ))}

                                                        <div className="clear"></div>
                                                    </div>
                                                </div>
                                                <div className="greennature-pagination"><span aria-current='page' class='page-numbers current'>1</span>
                                                    <a class='page-numbers' href='page/2/index.html'>2</a>
                                                    <a className="next page-numbers" href="page/2/index.html">Next &rsaquo;</a></div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </section>
                                </div>

                                <div className="clear"></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>

            <script type='text/javascript' src='js/jquery/jquery.js'></script>
            <script type='text/javascript' src='js/jquery/jquery-migrate.min.js'></script>

            <script type='text/javascript' src='plugins/superfish/js/superfish.js'></script>
            <script type='text/javascript' src='js/hoverIntent.min.js'></script>
            <script type='text/javascript' src='plugins/dl-menu/modernizr.custom.js'></script>
            <script type='text/javascript' src='plugins/dl-menu/jquery.dlmenu.js'></script>
            <script type='text/javascript' src='plugins/jquery.easing.js'></script>
            <script type='text/javascript' src='plugins/fancybox/jquery.fancybox.pack.js'></script>
            <script type='text/javascript' src='plugins/fancybox/helpers/jquery.fancybox-media.js'></script>
            <script type='text/javascript' src='plugins/fancybox/helpers/jquery.fancybox-thumbs.js'></script>
            <script type='text/javascript' src='plugins/flexslider/jquery.flexslider.js'></script>
            <script type='text/javascript' src='plugins/jquery.isotope.min.js'></script>
            <script type='text/javascript' src='js/plugins.js'></script>
            <script type='text/javascript' src='plugins/jquery.transit.min.js'></script>
            <script type='text/javascript' src='plugins/gdlr-portfolio/gdlr-portfolio-script.js'></script>
        </Layout>
    )
}

export default WhatWeDo;