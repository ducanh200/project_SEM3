import LayoutStaff from "../../layouts/layoutStaff";
import api from "../../../services/api";
import url from "../../../services/url";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Staff_createproject(){
    const navigate = useNavigate();
  const [projects, setNews] = useState({
    name: "",
    thumbnailFile1: "",
    thumbnailFile2: "",
    fund:"",
    description: "",
    city: "",
    countryId: "",
    topicId: "",
    begin:"",
    finish:"",
  });
  const [topics, setTopics] = useState([]);
  const [countries, setCountries] = useState([]);

  const loadTopics = async () => {
    try {
      const rs = await api.get(url.TOPIC.LIST);
      if (rs.data) {
        setTopics(rs.data);
      }
    } catch (error) {
      console.error("Error loading topics:", error);
    }
  };

  const loadCountries = async () => {
    try {
      const rs = await api.get(url.COUNTRY.LIST);
      if (rs.data) {
        setCountries(rs.data);
      }
    } catch (error) {
      console.error("Error loading countries:", error);
    }
  };

  useEffect(() => {
    loadTopics();
    loadCountries();
  }, []);

  const handleInputChange = (e) => {
    const { name, type } = e.target;
    const value = type === "file" ? e.target.files[0] : e.target.value;
  
    setNews((prevNews) => ({
      ...prevNews,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
  
      // Thêm các trường khác vào FormData
      Object.keys(projects).forEach((key) => {
        if (key === "thumbnailFile1" || key === "thumbnailFile2") {
          if (projects[key]) {
            formData.append(key, projects[key]);
          }
        } else {
          formData.append(key, projects[key]);
        }
      });
  
      console.log("FormData:", formData);
  
      const response = await api({
        method: "post",
        url: url.PROJECT.CREATE,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      console.log("Response from Server:", response.data);
  
      navigate("/staff/projects");
    } catch (error) {
      console.error("Error updating news:", error);
    //   console.error("Inner Exception:", error.innerException);
    }
  };
    return(
        <LayoutStaff>
      <div className="page-breadcrumb">
        <div className="row align-items-center">
          <div className="col-md-6 col-8 align-self-center">
            <h3 className="page-title mb-0 p-0">Create a Project</h3>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    List Project
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Create a Project
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card"
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="card-bory">
          <form
            onSubmit={handleSubmit}
            style={{
              width: "700px",
              float: "none",
              margin: "auto",
              height: "670px",
            }}
          >
            <div className="form-group">
              <h2 style={{ textAlign: "center", marginTop: "15px" }}>
                Create A Project
              </h2>
            </div>

            <div className="form-group" style={{ marginTop: "20px" }}>
              <div className="form-create" style={{ float: "left", marginRight: "100px" }}>
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  onChange={handleInputChange}
                  name="name"
                  type="text"
                  className="form-control"
                  style={{
                    width: "300px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
              <div className="form-create" style={{ float: "left", marginLeft: "5px" }}>
                <label htmlFor="exampleFormControlInput1">Fund</label>
                <input
                  onChange={handleInputChange}
                  name="fund"
                  min={"0"}
                  type="number"
                  className="form-control"
                  style={{
                    width: "200px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: "100px", display: "flex" }}>
              <div className="chose_thumbnail">
                <label htmlFor="exampleFormControlFile1">Thumbnail-1</label>
                <br></br>
                <input
                  onChange={handleInputChange}
                  name="thumbnailFile1"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <div className="chose_thumbnail" style={{ marginLeft: "87px" }}>
                <label htmlFor="exampleFormControlFile2">Thumbnail-2</label>
                <br></br>
                <input
                  onChange={handleInputChange}
                  name="thumbnailFile2"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile2"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-create_2" style={{ float: "left", marginRight: "40px" }}>
                <label htmlFor="exampleFormControlInput1">City</label>
                <input
                  onChange={handleInputChange}
                  name="city"
                  type="text"
                  className="form-control"
                  style={{
                    width: "120px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
              <div className="form-create_2" style={{ float: "left", marginRight: "40px" }}>
                <label htmlFor="exampleFormControlInput1">Address</label>
                <input
                  onChange={handleInputChange}
                  name="address"
                  type="text"
                  className="form-control"
                  style={{
                    width: "120px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
              <div className="form-create_2" style={{ float: "left", marginRight: "40px" }}>
                <label htmlFor="exampleFormControlInput1">Topic</label>
                <select
                  onChange={handleInputChange}
                  name="topicId"
                  className="form-control"
                  style={{
                    width: "120px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                >
                    {topics.map(topic=>(
                  <option key={topic.id} value={topic.id}  >{topic.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-create_2" style={{ float: "left", marginRight: "40px" }}>
                <label htmlFor="exampleFormControlInput1">Country</label>
                <select
                  onChange={handleInputChange}
                  name="countryId"
                  className="form-control"
                  style={{
                    width: "120px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                >
                    {countries.map(country=>(
                  <option key={country.id}  value={country.id}>{country.name}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="datetime" style={{marginTop:"100px",display:"flex"}}>
            <div className="form-group" >
                <label htmlFor="exampleFormControlInput1">Begin Date</label>
                <input
                    onChange={handleInputChange}
                    name="begin"
                    type="date"
                    className="form-control"
                    style={{
                    width: "200px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                    }}
                />
                </div>
                <div className="form-group" style={{marginLeft:'100px'}}>
                <label htmlFor="exampleFormControlInput1">Finish Date</label>
                <input
                    onChange={handleInputChange}
                    name="finish"
                    type="date" 
                    className="form-control"
                    style={{
                    width: "200px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                    }}
                />
                </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlInput1" style={{ marginTop: "20px" }}>
                Description
              </label>
              <textarea
                onChange={handleInputChange}
                style={{
                  width: "605px",
                  height: "80px",
                  backgroundColor: "#ffffff",
                  color: "black",
                  border: "1px solid #000000",
                }}
                className="form-control"
                name="description"
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutStaff>
    )
}
export default Staff_createproject;