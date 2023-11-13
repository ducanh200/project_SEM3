import LayoutStaff from "../../layouts/layoutStaff";
import api from "../../../services/api";
import url from "../../../services/url";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Staff_detailproject(){
  const {id} = useParams();
    const [project,setNews] = useState([]);
    const [relateds,setRelateds] = useState([]);
    const loadNews = async ()=>{
        try {
            const rs = await api.get(url.PROJECT.DETAIL+`?id=${id}`);
            setNews(rs.data);
        } catch (error) {
            console.error("Error loading news:", error);
        }
    }

    useEffect(()=>{
        loadNews();
    },[]);
    return(
        <LayoutStaff>
            <div className="container invoice">
              <div className="invoice-header">
                <div className="ui left aligned grid">
                  <div className="row">
                    <div className="left floated left aligned six wide column">
                      <div className="ui">
                        <h1 class = "ui header pageTitle">Detail :  <small class = "ui sub header">{project.name}</small></h1>
                        <h4 className="ui sub header invDetails">Date-Created: {project.create_at}</h4>
                      </div>
                    </div>  
                    <div className="right floated left aligned six wide column">
                      <div className="ui">
                          <img  src={project.thumbnail_1}  style={{minWidth:"500px",maxWidth:"500px",minHeight:"350px",maxHeight:"350px",marginLeft:"50px"}} alt="" width="1280" height="853" />
                          <img  src={project.thumbnail_2}  style={{minWidth:"500px",maxWidth:"500px",minHeight:"350px",maxHeight:"350px",marginLeft:"80px"}} alt="" width="1280" height="853" />
                          
                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui segment cards">
                <div className="ui segment itemscard">
                  <div className="content">
                    <table className="ui celled table">
                      <thead>
                        <tr>
                          <th className="text-center colfix">Fund</th>
                          <th className="text-center colfix">Address</th>
                          <th className="text-center colfix">City</th>
                          <th className="text-center colfix">Country</th>
                          <th className="text-center colfix">Topic</th>
                          <th className="text-center colfix">Begin</th>
                          <th className="text-center colfix">Fisnish</th>
                          <th className="text-center colfix">Created At</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                           {project.fund}
                          </td>
                          <td>
                          {project.address}
                          </td>
                          <td>
                          {project.city}
                          </td>
                          <td>
                          {project?.country?.name}
                          </td>
                          <td>
                          {project?.topic?.name}
                          </td>
                          <td>
                          {project.begin}
                          </td>
                          <td>
                          {project.fishnish}
                          </td>
                          <td>
                          {project.create_at}
                          </td>
                          
                        </tr>


                      </tbody>
                    <tfoot className="full-width">

              </tfoot>
                    </table>

                  </div>
                </div>
                <div className="ui card">
                  <div className="content" style={{height:"125px",border:"0px solid black",background:"#eef5f9"}}>
                      <p>{project.description} </p>
                  </div>

                </div>
                <div className="more" style={{margin:"10px",backgroundColor:"#eef5f9", marginBottom: "15px"}}>
                <NavLink to={`/staff/editproject/${project.id}`}><a href="" className="btn btn-primary">Edit</a></NavLink>

                <NavLink to={`/staff/delete/${project.id}`}><a style={{marginLeft:"20px"}} href="#" className="btn btn-primary">Delete</a></NavLink>

                  </div>
              </div>
            </div>
        </LayoutStaff>
    )
}
export default Staff_detailproject;