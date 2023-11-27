import Header from "../../layouts/admin/header";
import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";
import {useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Projects(){
    const { id } = useParams();
    const [projects,setProjects] = useState([]);
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

    const handleDelete = async (projectId) => {
        try {
            alert('You sure want delete this project?')
          const response = await api.delete(`${url.PROJECT.DELETE}?id=${projectId}`);
          console.log("Delete Response:", response.data);


          loadProjects();
        } catch (error) {
          console.error("Error deleting project:", error);
        }
      };
    return(
        <LayoutAdmin>
            <div className="page-breadcrumb">
            <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">List Project</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active" aria-current="page">List Project</li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-6 col-4 align-self-center">
                        <div className="text-end upgrade-btn">
                            <a href="/admin/createproject"
                                className="btn btn-danger d-none d-md-inline-block text-white">Create Project</a>
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
                                    <h2 className="card-title">Projects</h2>
                                    
                                </div>
                                <div className="table-responsive">
                                    <table className="table user-table">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">#</th>
                                                <th className="border-top-0">Name</th>
                                                <th className="border-top-0">Image</th>
                                                <th className="border-top-0">Country</th>
                                                <th className="border-top-0">More</th>
                                                <th className="border-top-0">Delete</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                projects.map(project=>(
                                            <tr>
                                                <td>{project.id}</td>
                                                <td>{project.name}</td>
                                                <td><img src={project.thumbnail_1} style={{maxWidth:"200px",maxHeight:"200px"}} /></td>
                                                <td>{project.country.name}</td>
                                                <td><NavLink to={`/admin/detailproject/${project.id}`}><a className="btn btn-primary" href="">More</a></NavLink></td>
                                                <td><a className="btn btn-primary" onClick={() => handleDelete(project.id)}>Delete</a></td>
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
export default Projects;