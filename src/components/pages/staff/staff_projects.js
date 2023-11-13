
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
            <Breadcrumb_staff/>
            <div className="container-fluid" style={{ marginTop: "25px"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Table</h4>
                                <h6 className="card-subtitle">Add class <code>.table</code></h6>
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