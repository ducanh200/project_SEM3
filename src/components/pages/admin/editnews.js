import LayoutAdmin from "../../layouts/layoutAdmin";
import api from "../../../services/api";
import url from "../../../services/url";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditNews(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [news, setNews] = useState({
      id: "",
      name: "",
      city: "",
      country_id: "",
      topic_id: "",
      thumbnailFile: null,
      description: "",
    });
    const [topics, setTopic] = useState([]);
    const [countrys, setCountry] = useState([]);
  
    const loadNews = async () => {
      try {
        const rs = await api.get(url.NEWS.DETAIL + `?id=${id}`);
        setNews(rs.data);
      } catch (error) {
        console.error("Error loading news:", error);
      }
    };
  
    const loadTopics = async () => {
      try {
        const rs = await api.get(url.TOPIC.LIST);
        setTopic(rs.data);
      } catch (error) {
        console.error("Error loading topics:", error);
      }
    };
  
    const loadCountrys = async () => {
      try {
        const rs = await api.get(url.COUNTRY.LIST);
        setCountry(rs.data);
      } catch (error) {
        console.error("Error loading countries:", error);
      }
    };
  
    useEffect(() => {
      loadNews();
      loadTopics();
      loadCountrys();
    }, [id]);
  
    const handleInputChange = (e) => {
      const { name, value, type } = e.target;
      setNews((prevNews) => ({
        ...prevNews,
        [name]: type === "file" ? e.target.files[0] : value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData();
  
        // Thêm các trường khác vào FormData
        Object.keys(news).forEach((key) => {
          formData.append(key, news[key]);
        });
  
        console.log("FormData:", formData);
  
        const response = await api({
          method: "put",
          url: url.NEWS.UPDATE,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        console.log("Response from Server:", response.data);
  
        navigate("/staff/news");
      } catch (error) {
        console.error("Error updating news:", error);
      }
    };
    return(
        <LayoutAdmin>
              <div className="page-breadcrumb">
        <div className="row align-items-center">
          <div className="col-md-6 col-8 align-self-center">
            <h3 className="page-title mb-0 p-0">Edit a New</h3>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    List New
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Detail New
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Edit a New
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
            <div class="form-group">
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  marginLeft: "-100px",
                }}
              >
                Edit News : {news.name}
              </h2>
            </div>
            <div class="form-group" style={{ marginTop: "20px" }}>
              <div class="form-create" style={{ float: "left", marginRight: "100px" }}>
                <label for="exampleFormControlInput1">Name</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  value={news.name}
                  class="form-control"
                  style={{
                    width: "250px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
              <div class="form-create" style={{ float: "left", marginRight: "100px" }}>
                <label for="exampleFormControlInput1">City</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="city"
                  value={news.city}
                  class="form-control"
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

            <div class="form-group" style={{ marginTop: "100px" }}>
              <label for="exampleFormControlFile1">Thumbnail</label>
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
                class="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>

            <div class="form-group" style={{ marginTop: "20px" }}>
              <div class="form-create_2" style={{ float: "left", marginRight: "100px" }}>
                <label for="exampleFormControlInput1">Country</label>
                <select
                  value={news.country_id}
                  onChange={handleInputChange}
                  name="country_id"
                  class="form-control"
                  style={{
                    width: "250px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                >
                  {countrys.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div class="form-create_2" style={{ float: "left", marginRight: "100px" }}>
                <label for="exampleFormControlInput1">Topic</label>
                <select
                  value={news.topic_id}
                  onChange={handleInputChange}
                  name="topic_id"
                  class="form-control"
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

            <div class="form-group" style={{ marginTop: "100px" }}>
              <label for="exampleFormControlInput1">Description</label>
              <textarea
                value={news.description}
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
            <div class="form-group">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
    )
}
export default EditNews;