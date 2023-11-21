import Layout from "../../layouts/layouts";
import {useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function Topic_filter_news (){
    const { id } = useParams();
    const [topics, setTopic] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
  
    const loadTopics = async () => {
      try {
        const rs = await api.get(url.TOPIC.LIST);
        setTopic(rs.data);
      } catch (error) {
        console.error("Error loading topics:", error);
      }
    };
  
    const loadNewsByTopicId = async (topicId) => {
        try {
          // Lấy danh sách tất cả các dự án
          const allNews = await api.get(url.NEWS.LIST);
      
          // Lọc chỉ những dự án có topic_id giống với topicId
          const filteredNews = allNews.data.filter(news => news.topic_id === topicId);
      
          // Cập nhật state với danh sách dự án đã lọc
          setFilteredNews(filteredNews);
        } catch (error) {
          console.error(`Error loading news for topic ${topicId}:`, error);
        }
      };
  
    useEffect(() => {
      loadTopics();
    }, []);
  
    useEffect(() => {
      // Lấy topic_id từ URL và chuyển đổi thành số nguyên
      const topicIdToFilter = parseInt(id, 10);
  
      // Kiểm tra xem topicIdToFilter có trong danh sách topics không
      const selectedTopic = topics.find((topic) => topic.id === topicIdToFilter);
  
      if (selectedTopic) {
        // Nếu có, gọi hàm để lấy danh sách news dựa trên topic_id
        loadNewsByTopicId(topicIdToFilter);
      } else {
        // Nếu không, xử lý trường hợp không tìm thấy chủ đề
        console.warn(`Topic with id ${topicIdToFilter} not found.`);
      }
    }, [id, topics]);
  
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
                                                    {filteredNews.map(news=>(
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
                                    <h3 className="greennature-widget-title">Recent Posts</h3>
                                    <div className="clear"></div>
                                    <ul>
                                        <li>
                                            <a href="#">Sem Porta Mollis Parturi</a>
                                        </li>
                                        <li>
                                            <a href="#">Nullam Lorem Mattis Purus</a>
                                        </li>
                                        <li>
                                            <a href="#">Nibh Sem Sit Ullamcorper</a>
                                        </li>
                                        <li>
                                            <a href="#">Donec luctus imperdiet</a>
                                        </li>
                                        <li>
                                            <a href="#">Magna pars studiorum</a>
                                        </li>
                                        <li>
                                            <a href="#">Sedial eiusmod tempor</a>
                                        </li>
                                        <li>
                                            <a href="#">Eiusmod tempor incidunt</a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="gdlr-recent-portfolio2-widget-4" className="widget widget_gdlr-recent-portfolio2-widget greennature-item greennature-widget">
                                    <h3 className="greennature-widget-title">Recent Works</h3>
                                    <div className="clear"></div>
                                    <div className="greennature-recent-port2-widget">
                                        <div className="recent-port-widget-thumbnail">
                                            <a href="#"><img src="upload/shutterstock_161515241-150x150.jpg" alt="" width="150" height="150" /></a>
                                        </div>
                                        <div className="recent-port-widget-thumbnail">
                                            <a href="#"><img src="upload/shutterstock_133689230-150x150.jpg" alt="" width="150" height="150" /></a>
                                        </div>
                                        <div className="recent-port-widget-thumbnail">
                                            <a href="#"><img src="upload/shutterstock_53600221-150x150.jpg" alt="" width="150" height="150" /></a>
                                        </div>
                                        <div className="recent-port-widget-thumbnail">
                                            <a href="#"><img src="upload/shutterstock_124871620-150x150.jpg" alt="" width="150" height="150" /></a>
                                        </div>
                                        <div className="recent-port-widget-thumbnail">
                                            <a href="#"><img src="upload/shutterstock_281995004-150x150.jpg" alt="" width="150" height="150" /></a>
                                        </div>
                                        <div className="recent-port-widget-thumbnail">
                                            <a href="#"><img src="upload/shutterstock_256181956-150x150.jpg" alt="" width="150" height="150" /></a>
                                        </div>
                                        <div className="recent-port-widget-thumbnail">
                                            <a href="#"><img src="upload/shutterstock_104475683-150x150.jpg" alt="" width="150" height="150" /></a>
                                        </div>
                                        <div className="recent-port-widget-thumbnail">
                                            <a href="#"><img src="upload/shutterstock_278672942-150x150.jpg" alt="" width="150" height="150" /></a>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div id="categories-3" className="widget widget_categories greennature-item greennature-widget">
                                    <h3 className="greennature-widget-title">Categories</h3>
                                    <div className="clear"></div>
                                    <ul>
                                        <li className="cat-item cat-item-2"><a href="#">Aside</a> (1)
                                        </li>
                                        <li className="cat-item cat-item-3"><a href="#">Audio</a> (1)
                                        </li>
                                        <li className="cat-item cat-item-4"><a href="#">Blog</a> (13)
                                        </li>
                                        <li className="cat-item cat-item-5"><a href="#">Fit Row</a> (9)
                                        </li>
                                        <li className="cat-item cat-item-6"><a href="#">Life Style</a> (4)
                                        </li>
                                        <li className="cat-item cat-item-8"><a href="#">Post Slider</a> (3)
                                        </li>
                                        <li className="cat-item cat-item-9"><a href="#">Quote</a> (1)
                                        </li>
                                        <li className="cat-item cat-item-10"><a href="#">Video</a> (1)
                                        </li>
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
export default Topic_filter_news;