import Layout from "../../layouts/layouts";
import {useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { NavLink } from "react-router-dom";
import Topic from "./topic";
import { useParams } from "react-router-dom";


function NewsAll(){
    const { id } = useParams();
    const [countries, setCountries] = useState([]);
    const [topics,setTopic] = useState([]);
    const [news,setNews] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 6;
    const [filteredNews, setFilteredNews] = useState([]);

    const loadTopics = async ()=>{
        try {
            const rs = await api.get(url.TOPIC.LIST);
            setTopic(rs.data);
        } catch (error) {

        }
    }
    const loadCountries = async ()=>{
        try {
            const rs = await api.get(url.COUNTRY.LIST);
            setCountries(rs.data);
        } catch (error) {

        }
    }
    const loadNews = async ()=>{
        try {
            const rs = await api.get(url.NEWS.LIST);
            setNews(rs.data);
        } catch (error) {

        }
    }

   
    useEffect(()=>{
        loadTopics();
        loadNews();
        loadCountries();
    },[]);

      const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const currentNews = news.slice(startIndex, endIndex);

    return(
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
                                                    <h3 className="greennature-item-title greennature-skin-title greennature-skin-border">Environmental topics</h3>
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
                        <div className="with-sidebar-left eight columns">
                            <div className="with-sidebar-content twelve columns">
                                <section id="content-section-1">
                                    <div className="section-container container">
                                        <div className="portfolio-item-wrapper type-classic-portfolio" data-ajax="https://demo.goodlayers.com/greennature/wp-admin/admin-ajax.php">  
                                        <div className="filter clearfix gdlr-core-filterer-wrap gdlr-core-js  gdlr-core-item-pdlr gdlr-core-style-text gdlr-core-center-align">
                                                <ul>
                                                    <li><a href="/news" style={{ textDecoration: 'none'}}   data-filter="*">All</a></li>
                                                    <li>
                                                    {topics.map((topic)=>(
                                                        <li ><NavLink to={`/topicfilternews/${topic.id}`}>
                                                        <a style={{ textDecoration: 'none' }} data-filter=".class3" key={topic.id}>
                                                          {topic.name}
                                                        </a>
                                                      </NavLink></li>
                                                    ))}
                                                   </li>
                                                </ul>
                                            </div>  
                                            <div className="portfolio-item-holder  greennature-portfolio-column-2">
                                                <div className="greennature-isotope filter-container" data-type="portfolio" data-layout="masonry">
                                                    <div className="clear"></div>
                                                    {news.map(news=>(
                                                    <div className="six columns class1">
                                                        <div className="greennature-item greennature-portfolio-item greennature-classic-portfolio">
                                                            <div className="greennature-ux greennature-classic-portfolio-ux">
                                                                <div className="portfolio-thumbnail greennature-image"><img src={news.thumbnail} style={{minWidth:"100%",minHeight:"280px",maxWidth:"100%",maxHeight:"280px",marginTop:"15px"}} alt="" width="400" height="300" /><span className="portfolio-overlay">&nbsp;</span><a className="portfolio-overlay-icon" href="upload/shutterstock_161515241.jpg" data-rel="fancybox"><span className="portfolio-icon" ><i className="fa fa-search" ></i></span></a></div>
                                                                <div className="portfolio-classic-content">
                                                                    <h3 className="portfolio-title"><a  href="#"  >{news.name}</a></h3>
                                                                    <div className="greennature-portfolio-info">
                                                                        <div className="portfolio-info portfolio-tag"><a href="#" rel="tag">{news?.topic?.name}</a><span className="sep">,</span> <a href="#" rel="tag">{news?.country?.name}</a></div>
                                                                        <div className="clear"></div>
                                                                    </div>
                                                                    <div className="portfolio-excerpt">{news.description}
                                                                        <div className="clear"></div><NavLink to={`/newstdetail/${news.id}`}><a style={{marginTop:"10px"}} href="/detainews" className="btn btn-primary">Read More</a></NavLink></div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ))}
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="greennature-pagination greennature-ajax"><span className="page-numbers current" data-paged="1">1</span> <a className="page-numbers" data-paged="2">2</a> <a className="next page-numbers" data-paged="2"> Next &rsaquo;</a> </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </section>
                            </div>

                            <div className="clear"></div>
                        </div>

                        <div className="greennature-sidebar greennature-right-sidebar four columns">
                            <div className="greennature-item-start-content sidebar-right-item">
                                <div id="recent-posts-3" className="widget widget_recent_entries greennature-item greennature-widget">
                                <h3 className="greennature-widget-title">All Topics</h3>
                                    <div className="clear"></div>
                                    <ul>
                                        {topics.map(topic=>(
                                        <li>
                                            <NavLink to={`/topicfilternews/${topic.id}`}>
                                            <a style={{color:"green"}}>{topic.name}</a>
                                            </NavLink>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div id="categories-3" className="widget widget_categories greennature-item greennature-widget">
                                <h3 className="greennature-widget-title">All Countries</h3>
                                    <div className="clear"></div>
                                    <ul>
                                        {countries.map(country=>(
                                        <li>
                                            <NavLink to={`/countryfilternews/${country.id}`}>
                                            <a style={{color:"green"}}>{country.name}</a>
                                            </NavLink>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
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
export default NewsAll;