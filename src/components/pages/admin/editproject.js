import LayoutAdmin from "../../layouts/layoutAdmin";
import api from "../../../services/api";
import url from "../../../services/url";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditProjects() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    id: "",
    name: "",
    thumbnailFile1: null,
    thumbnailFile2: null,
    fund: "",
    description: "",
    city: "",
    address: "",
    countryId: "",
    topicId: "",
    begin: "",
    finish: "",
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

  const loadProject = async () => {
    try {
      const rs = await api.get(url.PROJECT.DETAIL + `?id=${id}`);
      setProject(rs.data);
    } catch (error) {
      console.error("Error loading project:", error);
    }
  };

  useEffect(() => {
    loadTopics();
    loadCountries();
    loadProject();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        setProject((prevProject) => ({
          ...prevProject,
          [name]: file,
        }));
      }
    } else {
      setProject((prevProject) => ({
        ...prevProject,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!project.thumbnailFile1 || !project.thumbnailFile2) {
      alert("Vui lòng chọn cả hai file ảnh.");
      return;
    }

    try {
      const formData = new FormData();

      Object.entries(project).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await api({
        method: "put",
        url: url.PROJECT.UPDATE,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response from Server:", response.data);

      navigate("/admin/projects");
    } catch (error) {
      console.log("Error updating project:", error);
    }
  };


  return (
    <LayoutAdmin>
      <div className="page-breadcrumb">
        <div className="row align-items-center">
          <div className="col-md-6 col-8 align-self-center">
            <h3 className="page-title mb-0 p-0">Edit a Project: {project.name}</h3>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">List Project</li>
                  <li className="breadcrumb-item active" aria-current="page">Detail Project</li>
                  <li className="breadcrumb-item active" aria-current="page">Edit a Project</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px", marginBottom: "20px" }}>
        <div className="card-body">
          <form onSubmit={handleSubmit} enctype="multipart/form-data" style={{ width: "700px", float: "none", margin: "auto", height: "670px" }}>
            <div className="form-group">
              <h2 style={{ textAlign: "center", marginTop: "15px" }}>Edit A Project</h2>
            </div>
            <div className="form-group" style={{ marginTop: "20px" }}>
              <div className="form-create" style={{ float: "left", marginRight: "100px" }}>
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  onChange={handleInputChange}
                  value={project.name}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder=""
                  style={{ width: "300px", backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                />
              </div>
              <div className="form-create" style={{ float: "left", marginLeft: "5px" }}>
                <label htmlFor="exampleFormControlInput1">Fund</label>
                <input
                  onChange={handleInputChange}
                  value={project.fund}
                  name="fund"
                  min={"0"}
                  type="number"
                  className="form-control"
                  placeholder=""
                  style={{ width: "200px", backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: "100px", display: "flex" }}>
              <div className="chose_thumbnail">
                <label htmlFor="exampleFormControlFile1">Thumbnail-1</label>
                <br />
                <input
                  onChange={handleInputChange}
                  style={{ backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                  type="file"
                  name="thumbnailFile1"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <div className="chose_thumbnail" style={{ marginLeft: "87px" }}>
                <label htmlFor="exampleFormControlFile1">Thumbnail-2</label>
                <br />
                <input
                  onChange={handleInputChange}
                  style={{ backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                  type="file"
                  name="thumbnailFile2"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-create_2" style={{ float: "left", marginRight: "40px" }}>
                <label htmlFor="exampleFormControlInput1">City</label>
                <input
                  onChange={handleInputChange}
                  value={project.city}
                  name="city"
                  type="text"
                  className="form-control"
                  placeholder=""
                  style={{ width: "120px", backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                />
              </div>
              <div className="form-create_2" style={{ float: "left", marginRight: "40px" }}>
                <label htmlFor="exampleFormControlInput1">Address</label>
                <input
                  onChange={handleInputChange}
                  value={project.address}
                  name="address"
                  type="text"
                  className="form-control"
                  placeholder=""
                  style={{ width: "120px", backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                />
              </div>
              <div className="form-create_2" style={{ float: "left", marginRight: "40px" }}>
                <label htmlFor="exampleFormControlInput1">Country</label>
                <select
                  onChange={handleInputChange}
                  value={project.countryId}
                  name="countryId"
                  className="form-control"
                  style={{ width: "120px", backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                >
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-create_2" style={{ float: "left", marginRight: "40px" }}>
                <label htmlFor="exampleFormControlInput1">Topic</label>
                <select
                  onChange={handleInputChange}
                  value={project.topicId}
                  name="topicId"
                  className="form-control"
                  style={{ width: "120px", backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                >
                  {topics.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                      {topic.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="datetime" style={{ marginTop: "100px", display: "flex" }}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Begin Date</label>
                <input
                  onChange={handleInputChange}
                  name="begin"
                  value={project.begin}
                  type="datetime-local"
                  className="form-control"
                  style={{
                    width: "200px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
              <div className="form-group" style={{ marginLeft: '100px' }}>
                <label htmlFor="exampleFormControlInput1">Finish Date</label>
                <input
                  onChange={handleInputChange}
                  name="finish"
                  value={project.finish}
                  type="datetime-local"
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
              <label htmlFor="exampleFormControlInput1" style={{ marginTop: "10px" }}>Description</label>
              <textarea
                value={project.description}
                onChange={handleInputChange}
                style={{ width: "605px", height: "80px", backgroundColor: "#ffffff", color: "black", border: "1px solid #000000" }}
                className="form-control"
                name="description"
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default EditProjects;
