import Layout from "../../layouts/layouts";
import api from "../../../services/api";
import url from "../../../services/url";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function NewsDetail(){
    const {id} = useParams();
    const [news,setNews] = useState([]);
    const [relateds,setRelateds] = useState([]);
    const loadNews = async ()=>{
        try {
            const rs = await api.get(url.NEWS.DETAIL+`?id=${id}`);
            setNews(rs.data);
        } catch (error) {
            console.error("Error loading news:", error);
        }
    }
    const loadRelateds = async ()=>{
        try {
            const rs = await api.get(url.NEWS.RELATEDS+`?id=${id}`);
            setRelateds(rs.data);
        } catch (error) {
            console.error("Error loading rrr:", error);
        }
    }
    useEffect(()=>{
        loadNews();
        loadRelateds();
    },[]);
    return(
        <Layout>
            
        <div className="greennature-page-title-wrapper header-style-5-title-wrapper">
            <div className="greennature-page-title-overlay"></div>
            <div className="greennature-page-title-container container">

                <h1 className="greennature-page-title">News:{news.name}</h1>

               
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
                                                    <a href="upload/shutterstock_256181956.jpg" data-fancybox-group="greennature-gal-1" data-rel="fancybox"><img src={news.thumbnail} style={{minWidth:"500px",maxWidth:"500px",minHeight:"350px",maxHeight:"350px"}} alt="" width="1280" height="853" /></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="greennature-portfolio-content">
                                            <div className="greennature-portfolio-info">
                                                <h4 className="head">{news.name}</h4>
                                                 
                                                <div className="content">
                                                    <div className="portfolio-info portfolio-clients"><span className="info-head greennature-title">Date : {news.created_at} </span></div>
                                                    <div className="portfolio-info portfolio-skills"><span className="info-head greennature-title">City : {news.city} </span></div>
                                                    <div className="portfolio-info portfolio-website"><span className="info-head greennature-title">Country : {news?.country?.name}</span></div>
                                                    <div className="clear"></div>

                                                </div> 
                                            </div>
                                            <div className="greennature-portfolio-description">
                                                <h4 className="head">Project Description</h4>
                                                <div className="content">
                                                    <p>{news.description}</p>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        
                                    </div>

                                    <div className="clear"></div>

                                </div>

                                <div className="greennature-related-portfolio portfolio-item-holder">
                                    <h4 className="head">Related Projects:</h4>
                                    <div className="greennature-isotope" data-type="portfolio" data-layout="fitRows">
                                        <div className="clear"></div>
                                        
                                      {relateds.map(related=>(
                                        <div className="three columns">
                                            <div className="greennature-item greennature-portfolio-item greennature-classic-portfolio">
                                                <div className="greennature-ux greennature-classic-portfolio-ux">
                                                    <div className="portfolio-thumbnail greennature-image"><img src={related.thumbnail} alt="" width="700" height="400" /><span className="portfolio-overlay">&nbsp;</span><a className="portfolio-overlay-icon" href="https://vimeo.com/101707505" data-rel="fancybox" data-fancybox-type="iframe"><span className="portfolio-icon" ><i className="fa fa-film" ></i></span></a></div>
                                                    <div className="portfolio-classic-content">
                                                        <h3 className="portfolio-title"><a>{related.name}</a></h3>
                                                        <div className="greennature-portfolio-info">
                                                            <div className="portfolio-info portfolio-tag"><span className="info-head greennature-title"></span><a href="#" rel="tag">{related?.topic?.name}</a><span className="sep">,</span> <a href="#" rel="tag">{related?.country?.name}</a></div>
                                                            <div className="clear"></div>
                                                        </div>
                                                        <div className="portfolio-excerpt">{related.description}
                                                            <div className="clear"></div><a href="#" className="excerpt-read-more">Read More</a></div><a className="portfolio-classic-learn-more" href="#">Learn More</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    
                                        
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
export default NewsDetail;