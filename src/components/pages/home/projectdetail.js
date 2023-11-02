import news from "../../data/news";
import Layout from "../../layouts/layouts";


function ProjectDetail(){
    return(
        <Layout>
            
        <div className="greennature-page-title-wrapper header-style-5-title-wrapper">
            <div className="greennature-page-title-overlay"></div>
            <div className="greennature-page-title-container container">
           
                <h1 className="greennature-page-title">Kids Can Volunteer</h1>
               
                <span className="greennature-page-caption">Caption placed here</span>
            </div>
        </div>
        <div className="content-wrapper">
            <div className="greennature-content">

                <div className="with-sidebar-wrapper">
                    <div className="with-sidebar-container container greennature-class-no-sidebar">
                        <div className="with-sidebar-left twelve columns">
                            <div className="with-sidebar-content twelve columns">
                                <div className="greennature-item greennature-portfolio-style2 greennature-item-start-content">
                                    <div id="portfolio-76" className="post-76 portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-environment portfolio_category-volunteer portfolio_tag-donation portfolio_tag-volunteer">
                                        <div className="greennature-portfolio-thumbnail ">
                                            <div className="greennature-stack-image-wrapper">
                                                <div className="greennature-stack-image">
                                                    <a href="upload/shutterstock_256181956.jpg" data-fancybox-group="greennature-gal-1" data-rel="fancybox"><img src="upload/shutterstock_256181956.jpg" alt="" width="1280" height="853" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        {news.map((n,index)=>(  
                                        <div className="greennature-portfolio-content">
                                            <div className="greennature-portfolio-info">
                                                <h4 className="head">Project Info</h4>
                                                 
                                                <div className="content">
                                                    <div className="portfolio-info portfolio-clients"><span className="info-head greennature-title">Date </span>{n.create_at}</div>
                                                    <div className="portfolio-info portfolio-skills"><span className="info-head greennature-title">City </span>{n.city}</div>
                                                    <div className="portfolio-info portfolio-website"><span className="info-head greennature-title">Country </span>{n.country}</div>
                                                    <div className="clear"></div>

                                                </div>
                                            </div>
                                            <div className="greennature-portfolio-description">
                                                <h4 className="head">Project Description</h4>
                                                <div className="content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Integer legentibus erat a ante historiarum dapibus. At nos hinc posthac, sitientis piros Afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Lorem ipsum dolor.</p>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        ))}
                                    </div>

                                    <div className="clear"></div>

                                </div>

                                <div className="greennature-related-portfolio portfolio-item-holder">
                                    <h4 className="head">Related Projects</h4>
                                    <div className="greennature-isotope" data-type="portfolio" data-layout="fitRows">
                                        <div className="clear"></div>
                                        <div className="three columns">
                                            <div className="greennature-item greennature-portfolio-item greennature-classic-portfolio">
                                                <div className="greennature-ux greennature-classic-portfolio-ux">
                                                    <div className="portfolio-thumbnail greennature-image"><img src="upload/shutterstock_53600221-700x400.jpg" alt="" width="700" height="400" /><span className="portfolio-overlay">&nbsp;</span><a className="portfolio-overlay-icon" href="https://vimeo.com/101707505" data-rel="fancybox" data-fancybox-type="iframe"><span className="portfolio-icon" ><i className="fa fa-film" ></i></span></a></div>
                                                    <div className="portfolio-classic-content">
                                                        <h3 className="portfolio-title"><a  href="#"  >Conservation Volunteer</a></h3>
                                                        <div className="greennature-portfolio-info">
                                                            <div className="portfolio-info portfolio-tag"><span className="info-head greennature-title">Tags </span><a href="#" rel="tag">Cleaning</a><span className="sep">,</span> <a href="#" rel="tag">Volunteer</a></div>
                                                            <div className="clear"></div>
                                                        </div>
                                                        <div className="portfolio-excerpt">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Vivamus...
                                                            <div className="clear"></div><a href="#" className="excerpt-read-more">Read More</a></div><a className="portfolio-classic-learn-more" href="#">Learn More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="three columns">
                                            <div className="greennature-item greennature-portfolio-item greennature-classic-portfolio">
                                                <div className="greennature-ux greennature-classic-portfolio-ux">
                                                    <div className="portfolio-thumbnail greennature-image"><img src="upload/shutterstock_124871620-700x400.jpg" alt="" width="700" height="400" /><span className="portfolio-overlay">&nbsp;</span><a className="portfolio-overlay-icon" href="#"><span className="portfolio-icon" ><i className="fa fa-link" ></i></span></a></div>
                                                    <div className="portfolio-classic-content">
                                                        <h3 className="portfolio-title"><a  href="#"  >Engery Conservation</a></h3>
                                                        <div className="greennature-portfolio-info">
                                                            <div className="portfolio-info portfolio-tag"><span className="info-head greennature-title">Tags </span><a href="#" rel="tag">Animals</a><span className="sep">,</span> <a href="#" rel="tag">Volunteer</a></div>
                                                            <div className="clear"></div>
                                                        </div>
                                                        <div className="portfolio-excerpt">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Vivamus...
                                                            <div className="clear"></div><a href="#" className="excerpt-read-more">Read More</a></div><a className="portfolio-classic-learn-more" href="#">Learn More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="three columns">
                                            <div className="greennature-item greennature-portfolio-item greennature-classic-portfolio">
                                                <div className="greennature-ux greennature-classic-portfolio-ux">
                                                    <div className="portfolio-thumbnail greennature-image"><img src="upload/shutterstock_154639625-700x400.jpg" alt="" width="700" height="400" /><span className="portfolio-overlay">&nbsp;</span><a className="portfolio-overlay-icon" href="upload/shutterstock_154639625.jpg" data-rel="fancybox"><span className="portfolio-icon" ><i className="fa fa-search" ></i></span></a></div>
                                                    <div className="portfolio-classic-content">
                                                        <h3 className="portfolio-title"><a  href="#"  >Cursus Adig Pellen</a></h3>
                                                        <div className="greennature-portfolio-info">
                                                            <div className="portfolio-info portfolio-tag"><span className="info-head greennature-title">Tags </span><a href="#" rel="tag">Plants</a><span className="sep">,</span> <a href="#" rel="tag">Volunteer</a></div>
                                                            <div className="clear"></div>
                                                        </div>
                                                        <div className="portfolio-excerpt">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Vivamus...
                                                            <div className="clear"></div><a href="#" className="excerpt-read-more">Read More</a></div><a className="portfolio-classic-learn-more" href="#">Learn More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>

            </div>
            <div className="clear"></div>
        </div>
        </Layout>
    )
}
export default ProjectDetail;