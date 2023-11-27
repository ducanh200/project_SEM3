import LayoutAdmin from "../../layouts/layoutAdmin";
import api from "../../../services/api";
import url from "../../../services/url";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Admin_Edittopic() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [topic, setTopic] = useState({
    id: "",
    name: "",
  });

  const loadTopic = async () => {
    try {
      const rs = await api.get(url.TOPIC.DETAIL + `?id=${id}`);
      setTopic(rs.data);
    } catch (error) {
      console.error("Error loading topic:", error);
    }
  };

  useEffect(() => {
    loadTopic();
  }, [id]);

  const handleNameChange = (e) => {
    setTopic({ ...topic, name: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(url.TOPIC.UPDATE, {
        id: topic.id,
        name: topic.name,
      });
      // Thực hiện chuyển hướng sau khi cập nhật thành công
      navigate("/admin/topics");
    } catch (error) {
      console.error("Error updating topic:", error);
    }
  };

  return (
    <LayoutAdmin>
      <div className="page-breadcrumb">
        <div className="row align-items-center">
          <div className="col-md-6 col-8 align-self-center">
            <h3 className="page-title mb-0 p-0">Edit a Topic</h3>
            <div className="d-flex align-items-center">
              {/* ...Breadcrumb code */}
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
        <div className="card-body">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            style={{
              width: "700px",
              float: "none",
              margin: "auto",
              height: "670px",
            }}
          >
            <div className="form-group">
              <h2 style={{ textAlign: "center", marginTop: "15px" }}>
                Edit A Topic
              </h2>
            </div>

            <div className="form-group"  style={{marginTop: "50px", marginLeft: "200px"}}>
              <div className="form-create" style={{ float: "left", marginRight: "100px" }}>
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  name="name"
                  type="text"
                  value={topic.name}
                  onChange={handleNameChange}
                  className="form-control"
                  placeholder=""
                  style={{
                    width: "300px",
                    backgroundColor: "#ffffff",
                    color: "black",
                    border: "1px solid #000000",
                  }}
                />
              </div>
            </div>

            <div className="form-group"  style={{marginTop: "140px", marginLeft: "200px"}}>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Admin_Edittopic;
