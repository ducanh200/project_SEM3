import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import React, { useState } from 'react';
import api from "../../../services/api";
import url from "../../../services/url";

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    address: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formDataObject = new FormData();
    // formDataObject.append("name", formData.name);
    // formDataObject.append("email", formData.email);
    // formDataObject.append("password", formData.password);
    // formDataObject.append("phone", formData.phone);
    // formDataObject.append("city", formData.city);
    // formDataObject.append("address", formData.address);

    try {
      const response = await api.post(url.USER.REGISTER, formData);
console.log(response.data)
      if (response.ok) {
        // Đăng ký thành công
        setSuccess(true);
        // Thực hiện các hành động khác, ví dụ: chuyển hướng người dùng
      } else {
        // Đăng ký thất bại
        const data = await response.json();
        setError(data.message || 'Đăng ký không thành công');
      }
    } catch (error) {
      // Xử lý lỗi kết nối
      setError('Lỗi kết nối, vui lòng thử lại sau.');
      console.error('Lỗi kết nối:', error);
    }
  };

  return (
    <section>
      <Header></Header>
      <section className="vh-100 bg-image" style={{ marginBottom: "320px" }}>
        <div style={{ backgroundImage: "url('upload/act-bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: "15px", marginTop: "150px", marginBottom: "50px" }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                          <input onChange={handleChange} name="name" type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                          <input onChange={handleChange} name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                          <input onChange={handleChange} name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <div className="form-outline mb-4" style={{ width: "275px" }}>
                            <label className="form-label" htmlFor="form3Example4cdg">Phone</label>
                            <input onChange={handleChange} name="phone" type="text" id="form3Example4cdg" className="form-control form-control-lg" />
                          </div>

                          <div className="form-outline mb-4" style={{ width: "275px" }}>
                            <label className="form-label" htmlFor="form3Example4cdg">City</label>
                            <input onChange={handleChange} name="city" type="text" id="form3Example4cdg" className="form-control form-control-lg" />
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cdg">Address</label>
                          <input onChange={handleChange} name="address" type="text" id="form3Example4cdg" className="form-control form-control-lg" />
                        </div>

                        <div className="d-flex justify-content-center">
                          <input style={{ borderRadius: "15px" }} type="submit" value="Submit My Voice!" className="wpcf7-form-control wpcf7-submit" />
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#"
                          className="fw-bold text-body"><u style={{ textDecoration: "none" }}>Login here</u></a></p>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default Register;