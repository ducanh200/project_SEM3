import Header from "../../layouts/admin/header";
import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";
import {useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
function Projects(){
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
    return(
        <LayoutAdmin>
            <div className="page-breadcrumb">
                <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">Project</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Project</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Project</li>

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
                                    <a className="btn btn-primary" href="admin/createproject" style={{marginBottom: "auto"}}>Create</a>
                                </div>
                                <div className="table-responsive">
                                    <table className="table user-table">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">#</th>
                                                <th className="border-top-0">Name</th>
                                                <th className="border-top-0">Image</th>
                                                <th className="border-top-0">Country</th>
                                                <th className="border-top-0">Fund</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                projects.map(project=>(
                                            <tr>
                                                <td>{project.id}</td>
                                                <td>{project.name}</td>
                                                <td><img src="{project.thumbnail}" /></td>
                                                <td>{project.country.name}</td>
                                                <td><a className="btn btn-primary" href="">More</a></td>
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