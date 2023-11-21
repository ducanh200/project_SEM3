
import Header from "../../layouts/staff/header";
import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb_staff from "../../layouts/staff/breadcrumb";
import LayoutStaff from "../../layouts/layoutStaff";
import {useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { NavLink } from "react-router-dom";
function Staff_project(){
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
        <LayoutStaff>
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
                            <a href="staff/createproject"
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
                            <h4 className="card-title">Projects</h4>
                                <div className="table-responsive">
                                    <table className="table user-table">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">#</th>
                                                <th className="border-top-0">Name</th>
                                                <th className="border-top-0">City</th>
                                                <th className="border-top-0">Country</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                projects.map(project=>(
                                            <tr>
                                                <td>{project.id}</td>
                                                <td>{project.name}</td>
                                                <td>{project.city}</td>
                                                <td>{project.country.name}</td>
                                                <td><NavLink to={`/staff/detailproject/${project.id}`}><a className="btn btn-primary" href="">More</a></NavLink></td>
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
        </LayoutStaff>
    )
}
export default Staff_project;