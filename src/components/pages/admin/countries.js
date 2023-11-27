import Header from "../../layouts/admin/header";
import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";
import api from "../../../services/api";
import url from "../../../services/url";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Admin_Country(){
    const [countries, setCountries] = useState([]);

    const loadCountries = async () => {
        try {
          const rs = await api.get(url.COUNTRY.LIST);
          if (rs.data) {
            setCountries(rs.data);
          }
        } catch (error) {
          console.error("Error loading topics:", error);
        }
      };
      useEffect(() => {
        loadCountries();
      }, []); 

      const handleDelete = async (countryId) => {
        try {
            alert('You sure want delete this topic?');
          const response = await api.delete(`${url.COUNTRY.DELETE}?id=${countryId}`);
          console.log("Delete Response:", response.data);

  
        loadCountries();
        } catch (error) {
          console.error("Error deleting project:", error);
        }
      };
    return(
        <LayoutAdmin>
            <div className="page-breadcrumb">
                <div className="row align-items-center">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="page-title mb-0 p-0">List Country</h3>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active" aria-current="page">List Country</li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-6 col-4 align-self-center">
                        <div className="text-end upgrade-btn">
                            <a href="/admin/createcountry"
                                className="btn btn-danger d-none d-md-inline-block text-white">Create Country</a>
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
                                    <h2 className="card-title">Countries</h2>
                                </div>
                                <div className="table-responsive">
                                <table className="table user-table">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">#</th>
                                                <th className="border-top-0">Topic</th>
                                                <th className="border-top-0">More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {countries.map(country=>(
                                            <tr>
                                                <td>{country.id}</td>
                                                <td>{country.name}</td>
                                                <td>
                                                <NavLink to={`/admin/editcountry/${country.id}`}><a style={{marginRight:"10px"}}  className="btn btn-primary">Edit</a></NavLink>
                                                <a onClick={() => handleDelete(country.id)} style={{marginLeft:"10px"}} className="btn btn-primary">Delete</a>
                                                </td>
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
export default Admin_Country;