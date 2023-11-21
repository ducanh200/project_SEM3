import Layout from "../../layouts/layouts";
import {useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { NavLink } from "react-router-dom";
import Topic from "./topic";


function NewsAll(){
    const [topics,setTopic] = useState([]);
    const [news,setNews] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 6;
    const loadTopics = async ()=>{
        try {
            const rs = await api.get(url.TOPIC.LIST);
            setTopic(rs.data);
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

    const loadProjectsByTopicId = async (topicId) => {
        try {
          const rs = await api.get(url.TOPIC.DETAIL + `?topic_id=${topicId}`);
          setFilteredProjects(rs.data);
        } catch (error) {
          console.error(`Error loading projects for topic ${topicId}:`, error);
        }
      };
    useEffect(()=>{
        loadTopics();
        loadNews();
    },[]);

    useEffect(() => {
        // Lấy topic_id của topic muốn lấy projects
        const topicIdToFilter = 1;
    
        // Gọi hàm để lấy danh sách projects dựa trên topic_id
        loadProjectsByTopicId(topicIdToFilter);
      }, [topics]);

      const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const currentNews = news.slice(startIndex, endIndex);
    return(
        <Layout>
        <div className="greennature-page-title-wrapper header-style-5-title-wrapper">
            <div className="greennature-page-title-overlay"></div>
            <div className="greennature-page-title-container container">
                <h1 className="greennature-page-title">News</h1>
                <span className="greennature-page-caption">All News</span>
            </div>
        </div>
        <div className="content-wrapper">
            <div className="greennature-content">


                <div className="with-sidebar-wrapper">
                    <div className="with-sidebar-container container">
                        <div className="with-sidebar-left eight columns">
                        <div style={{marginTop:"50px",marginBottom:"0"}} className="filter clearfix gdlr-core-filterer-wrap gdlr-core-js  gdlr-core-item-pdlr gdlr-core-style-text gdlr-core-center-align">
                                                <ul>
                                                    <li><a href="/news" style={{ textDecoration: 'none'}} data-filter="*">All</a></li>
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
                            <div style={{marginTop:"-50px"}} className="with-sidebar-content twelve columns">
                                <section id="content-section-1">
                                    <div className="section-container container">
                                        <div className="blog-item-wrapper">
                                            <div className="blog-item-holder">
                                                <div className="greennature-isotope" data-type="blog" data-layout="fitRows">
                                                    <div className="clear"></div>
                                                    {currentNews.map(news=>(
                                                    <div className="six columns">
                                                        <div className="greennature-item greennature-blog-grid greennature-skin-box">
                                                            <div className="greennature-ux greennature-blog-grid-ux">
                                                                <article id="post-852" className="post-852 post type-post status-publish format-standard has-post-thumbnail hentry category-fit-row tag-blog tag-life-style">
                                                                    <div className="greennature-standard-style">
                                                                        <div className="greennature-blog-thumbnail">
                                                                            <a> <img src={news.thumbnail} style={{minWidth:"100%",minHeight:"280px",maxWidth:"100%",maxHeight:"280px",marginTop:"15px"}}  alt="" width="400" height="300" /></a>
                                                                        </div>

                                                                        <div className="greennature-blog-grid-content">
                                                                            <header className="post-header">
                                                                                <h3 className="greennature-blog-title"><a href="#">{news.name}</a></h3>

                                                                                <div className="greennature-blog-info">
                                                                                    <div className="blog-info blog-date greennature-skin-info"><i className="fa fa-clock-o"></i><a href="#">{news.created_at}</a></div>
                                                                                    <div className="blog-info blog-comment greennature-skin-info"><i className="fa fa-comment-o"></i><a href="##respond">2 <span className="greennature-tail" >{news?.country?.name}</span></a></div>
                                                                                    <div className="clear"></div>
                                                                                </div>
                                                                                <div className="clear"></div>
                                                                            </header>

                                                                            <div className="greennature-blog-content">{news.description}
                                                                                <div className="clear"></div>
                                                                                <NavLink to={`/newsdetail/${news.id}`}><a style={{marginTop:"10px"}} className="btn btn-primary">Read More</a></NavLink></div>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ))
                                                    }

                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </section>
                                <div style={{marginRight:"35px"}} className="greennature-pagination">
                                            {Array.from({ length: Math.ceil(news.length / newsPerPage) }, (_, index) => (
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

                        <div className="greennature-sidebar greennature-right-sidebar four columns">
                            <div className="greennature-item-start-content sidebar-right-item">
                               
                                <div id="text-2" className="widget widget_text greennature-item greennature-widget">
                                    <h3 className="greennature-widget-title">Text Widget</h3>
                                    <div className="clear"></div>
                                    <div className="textwidget">Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
                                </div>
                                <div id="gdlr-recent-portfolio-widget-2" className="widget widget_gdlr-recent-portfolio-widget greennature-item greennature-widget">
                                    <h3 className="greennature-widget-title">Recent Works</h3>
                                    <div className="clear"></div>
                                    <div className="greennature-recent-port-widget">
                                        <div className="recent-post-widget">
                                            <div className="recent-post-widget-thumbnail">
                                                <a href="#"><img src="upload/shutterstock_161515241-150x150.jpg" alt="" width="150" height="150" /></a>
                                            </div>
                                            <div className="recent-post-widget-content">
                                                <div className="recent-post-widget-title"><a href="#">Wind Energy</a></div>
                                                <div className="recent-post-widget-info">
                                                    <div className="blog-info blog-date greennature-skin-info"><i className="fa fa-clock-o"></i><a href="#">04 Dec 2013</a></div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="recent-post-widget">
                                            <div className="recent-post-widget-thumbnail">
                                                <a href="#"><img src="upload/shutterstock_133689230-150x150.jpg" alt="" width="150" height="150" /></a>
                                            </div>
                                            <div className="recent-post-widget-content">
                                                <div className="recent-post-widget-title"><a href="#">Elephant Sanctuary</a></div>
                                                <div className="recent-post-widget-info">
                                                    <div className="blog-info blog-date greennature-skin-info"><i className="fa fa-clock-o"></i><a href="#">04 Dec 2013</a></div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="recent-post-widget">
                                            <div className="recent-post-widget-thumbnail">
                                                <a href="#"><img src="upload/shutterstock_53600221-150x150.jpg" alt="" width="150" height="150" /></a>
                                            </div>
                                            <div className="recent-post-widget-content">
                                                <div className="recent-post-widget-title"><a href="#">Conservation Volunteer</a></div>
                                                <div className="recent-post-widget-info">
                                                    <div className="blog-info blog-date greennature-skin-info"><i className="fa fa-clock-o"></i><a href="#">04 Dec 2013</a></div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                
                                <div id="tag_cloud-2" className="widget widget_tag_cloud greennature-item greennature-widget">
                                    <h3 className="greennature-widget-title">Topic</h3>
                                    <div className="clear"></div>
                                    <div className="tagcloud">
                                        {topics.map(topic=>(
                                        <a href="#" className="btn btn-primary" style={{fontSize: "8pt"}} aria-label="Animal (1 item)">{topic.name}</a>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>


            </div>
            <div className="clear"></div>
        </div>
        </div>
        </Layout>
    )
}
export default NewsAll;