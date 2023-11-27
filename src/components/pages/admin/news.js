import Header from "../../layouts/admin/header";
import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";
import {useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NewsList(){
    const navigate = useNavigate();
    const [news,setNews] = useState([]);
    const loadNews = async ()=>{
        try {
            const rs = await api.get(url.NEWS.LIST);
            setNews(rs.data);
        } catch (error) {

        }
    }
    useEffect(()=>{
        loadNews();
    },[]);

    const handleDelete = async (newsId) => {
        try {
            alert('You sure want delete this news?');
          const response = await api.delete(`${url.NEWS.DELETE}?id=${newsId}`);
          console.log("Delete Response:", response.data);

  
        loadNews();
        } catch (error) {
          console.error("Error deleting project:", error);
        }
      };
    return(
        <LayoutAdmin>
            <div className="page-breadcrumb">
            <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">List New</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active" aria-current="page">List New</li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-6 col-4 align-self-center">
                    <div className="text-end upgrade-btn">
                            <a href="/admin/createnews"
                                className="btn btn-danger d-none d-md-inline-block text-white">Create New</a>
                        </div>
                    </div>
                </div>
            </div>    

            <div className="container-fluid" style={{ marginTop: "25px"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <h2 className="card-title">News</h2>
                                    
                                </div>
                                <div className="table-responsive">
                                    <table className="table user-table">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">#</th>
                                                <th className="border-top-0">Name</th>
                                                <th className="border-top-0">Image</th>
                                                <th className="border-top-0">Topic</th>
                                                <th className="border-top-0">More</th>
                                                <th className="border-top-0">Delete</th>
                                                <th></th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {news.map(news=>(
                                            <tr>
                                                <td>{news.id}</td>
                                                <td>{news.name}</td>
                                                <td><img src={news.thumbnail} style={{maxHeight:"100px",maxWidth:"100px"}} /></td>
                                                <td>{news.topic.name}</td>
                                                <td><NavLink to={`/admin/detailnews/${news.id}`}><a href="" className="btn btn-primary">More</a></NavLink></td>
                                                <td><a className="btn btn-primary" onClick={() => handleDelete(news.id)}>Delete</a></td>
                                                
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}
export default NewsList;