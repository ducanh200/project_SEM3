import LayoutAdmin from "../../layouts/layoutAdmin";
import Breadcrumb from "../../layouts/admin/breadcrumb";
import api from "../../../services/api";
import url from "../../../services/url";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNews(){
    const navigate = useNavigate();
    const [news, setNews] = useState({
      name: "",
      city: "",
      country_id: "",
      topic_id: "",
      thumbnailFile: "",
      description: "",
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
        Object.keys(news).forEach((key) => {
          if (key === "thumbnailFile" && news[key]) {
            // Nếu là trường thumbnailFile và có giá trị, thêm vào FormData
            formData.append(key, news[key]);
          } else if (key !== "thumbnailFile" && news[key] !== '') {
            // Nếu không phải là trường thumbnailFile và không rỗng, thêm vào FormData
            formData.append(key, news[key]);
          }
        });
    
        console.log("FormData:", formData);
    
        const response = await api({
          method: "post",  // Nếu là create thì sử dụng method "post"
          url: url.NEWS.CREATE,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
    
        console.log("Response from Server:", response.data);
    
        navigate("/admin/news");
      } catch (error) {
        console.error("Error updating news:", error);
      }
    };
    return(
        <LayoutAdmin>
        <div className="page-breadcrumb">
        <div className="row align-items-center">
          <div className="col-md-6 col-8 align-self-center">
            <h3 className="page-title mb-0 p-0">Create a New</h3>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Create New
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px", marginBottom: "20px" }}>
        <div className="card-bory">
          <form
            onSubmit={handleSubmit}
            style={{ width: "700px", float: "none", margin: "auto", height: "670px" }}
          >
            <div className="form-group">
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  marginLeft: "-100px",
                }}
              >
                Create News :
              </h2>
            </div>
            <div className="form-group" style={{ marginTop: "20px" }}>
              <div className="form-create" style={{ float: "left", marginRight: "100px" }}>
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  className="form-control"
                  style={{
                    width: "250px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
              <div className="form-create" style={{ float: "left", marginRight: "100px" }}>
                <label htmlFor="exampleFormControlInput1">City</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder=""
                  style={{
                    width: "250px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: "100px" }}>
              <label htmlFor="exampleFormControlFile1">Thumbnail</label>
              <br></br>
              <input
                onChange={handleInputChange}
                name="thumbnailFile"
                style={{
                  backgroundColor: "#ffffff",
                  color: "black",
                  border: "1px solid #000000",
                  width: "250px",
                }}
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>

            <div className="form-group" style={{ marginTop: "20px" }}>
              <div className="form-create_2" style={{ float: "left", marginRight: "100px" }}>
                <label htmlFor="exampleFormControlInput1">Country</label>
                <select
                onChange={handleInputChange}
                name="country_id"
                className="form-control"
                style={{
                    width: "250px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                }}
                >
                {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                    {country.name}
                    </option>
                ))}
                </select>
              </div>
              <div className="form-create_2" style={{ float: "left", marginRight: "100px" }}>
                <label htmlFor="exampleFormControlInput1">Topic</label>
                <select
                onChange={handleInputChange}
                name="topic_id"
                className="form-control"
                style={{
                    width: "250px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                }}
                >
                {topics.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                    {topic.name}
                    </option>
                ))}
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginTop: "100px" }}>
              <label htmlFor="exampleFormControlInput1">Description</label>
              <textarea
                onChange={handleInputChange}
                style={{
                  width: "600px",
                  height: "200px",
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
    )
}
export default CreateNews;