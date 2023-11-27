import Layout from "../../layouts/layouts";
import {useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { NavLink } from "react-router-dom";

function WhatWeDo() {
    const [projects,setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const loadProjects = async ()=>{
        try {
            const rs = await api.get(url.PROJECT.LIST);
            setProjects(rs.data);
        } catch (error) {

        }
    }
    useEffect(()=>{
        loadProjects();
    },[]);

    const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);
  
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
                                    {currentProjects.map((project)=>(
                                                        <div className="four columns" style={{maxHeight:"470px",minHeight:"470px"}}>
                                                        <div className="greennature-item greennature-blog-grid greennature-skin-box">
                                                            <div className="greennature-ux greennature-blog-grid-ux">
                                                                <article id="post-852" className="post-852 post type-post status-publish format-standard has-post-thumbnail hentry category-fit-row tag-blog tag-life-style">
                                                                    <div className="greennature-standard-style">
                                                                        <div className="greennature-blog-thumbnail" style={{backgroundColor:"white"}}>
                                                                            <a href="#"> <img src={project.thumbnail_1} alt="" style={{minWidth:"375px",minHeight:"280px",maxWidth:"375px",maxHeight:"280px",marginTop:"15px"}} /></a>
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
                                                                                <div className="clear"></div>
                                                                                <NavLink to={`/projectdetail/${project.id}`}><a className="btn btn-primary">Read More</a></NavLink>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </div>
                                                        </div>
                                                    </div>
                                    ))}
                                                    </div>
                                                </div>
                                                    
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </section>
                                    <div className="greennature-pagination">
                                                    
                                    {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, index) => (
          <span
            key={index + 1}
            className={currentPage === index + 1 ? "page-numbers current" : "page-numbers"}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
                                                    
                                                    </div>
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