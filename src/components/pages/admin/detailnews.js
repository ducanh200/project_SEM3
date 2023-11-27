import LayoutAdmin from "../../layouts/layoutAdmin";
import api from "../../../services/api";
import url from "../../../services/url";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function DetailNew(){
  const navigate = useNavigate();
  const {id} = useParams();
  const [news,setNews] = useState([]);
  const loadNews = async ()=>{
      try {
          const rs = await api.get(url.NEWS.DETAIL+`?id=${id}`);
          setNews(rs.data);
      } catch (error) {
          console.error("Error loading news:", error);
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


    navigate("/admin/news");
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
    return(
        <LayoutAdmin>
             <div class="container invoice">
        <div class="invoice-header">
          <div class="ui left aligned grid">
            <div class="row">
              <div class="left floated left aligned six wide column">
                <div class="ui">
                  <h1 class = "ui header pageTitle">Detail <small class = "ui sub header">{news.name}</small></h1>
                  <h4 class="ui sub header invDetails">Date Created: {news.created_at}</h4>
                </div>
              </div>
              <div class="right floated left aligned six wide column">
                <div class="ui">
                  <div class="column two wide right floated">
                    <img class="logo" src={news.thumbnail} style={{minWidth:"500px",maxWidth:"500px",minHeight:"350px",maxHeight:"350px"}} alt="" width="1280" height="853"/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui segment cards">
          <div class="ui segment itemscard">
            <div class="content">
              <table class="ui celled table">
              <thead>
                  <tr>
                    <th className="text-center colfix">City</th>
                    <th className="text-center colfix">Country</th>
                    <th className="text-center colfix">Topic</th>
                    <th className="text-center colfix">Created At</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    {news.city}
                    </td>
                    <td>
                    {news?.country?.name}
                    </td>
                    <td>
                    {news?.topic?.name}
                    </td>
                    <td>
                    {news.created_at}
                    </td>

                  </tr>


                </tbody>

              </table>

            </div>
          </div>
          <div class="ui card">
            <div class="content" style={{height:"125px",border:"1px solid black"}}>
                <p>{news.description}</p>
            </div>

          </div>
          <div className="more" style={{margin:"10px",backgroundColor:"#eef5f9", marginBottom: "15px"}}>
          <NavLink to={`/admin/editnews/${news.id}`}><a href="" className="btn btn-primary">Edit</a></NavLink>

          <a style={{marginLeft:"20px"}}onClick={() => handleDelete(news.id)} className="btn btn-primary">Delete</a>

            </div>
        </div>
      </div>
        </LayoutAdmin>
    )
}
export default DetailNew;