import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import api from "../../../services/api";
import url from "../../../services/url";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Donate() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [project,setProject] = useState([]);
    const [profile, setProfile] = useState({});
    const [donationAmount, setDonationAmount] = useState("");

    const loadProject = async ()=>{
        try {
            const rs = await api.get(url.PROJECT.DETAIL+`?id=${id}`);
            setProject(rs.data);
        } catch (error) {
            console.error("Error loading project:", error);
        }
    }
    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                // Xử lý trường hợp không có token
                return;
            }
    
            // Gọi API để lấy thông tin người dùng
            const response = await api.get(url.USER.PROFILE, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            // Cập nhật state với thông tin người dùng
            setProfile(response.data);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };
    
    const handleDonationSubmit = async (event) => {
        event.preventDefault();

        try {
            // Gửi thông tin đơn đặt hàng đến backend
            const token = localStorage.getItem("token");
            if (!token) {
                // Xử lý trường hợp không có token
                return;
            }

            const response = await api.post(
                url.DONATE.CREATE,
                {
                    amount: donationAmount,
                    user_id: profile.id,
                    project_id: id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            navigate("/thankyou");
        } catch (error) {
            console.error("Error creating donation:", error);
        }
    };

    useEffect(()=>{
        loadProject();
        fetchUserProfile();
    },[]);
    return (

        <section>
            <Header></Header>
            <section className="vh-100 bg-image" >
                <div style={{ backgroundImage: "url('upload/act-bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ borderRadius: "15px", marginTop: "150px", marginBottom: "50px", width: "500px", marginLeft: "125px" }}>
                                        <div className="card-body p-5">
                                        <h4 className="text-uppercase text-center" style={{marginBottom:"30px"}}>Donator : {profile.name}</h4>
                                            <h2 className="text-uppercase text-center" style={{marginBottom:"30px"}}>Donate for :</h2>
                                            <div>
                                                <div className="greennature-item greennature-portfolio-item greennature-classic-portfolio">
                                                    <div className="greennature-ux greennature-classic-portfolio-ux">
                                                        <div className="portfolio-classic-content">
                                                            <h3 className="portfolio-title" style={{marginLeft:"90px", marginBottom:"20px"}}><a style={{fontSize:"25px",color:"green"}} >{project.name}</a></h3>
                                                        </div>
                                                        <div className="portfolio-thumbnail greennature-image"><img src={project.thumbnail_1} alt="" width="400" height="300" /><span className="portfolio-overlay">&nbsp;</span><a className="portfolio-overlay-icon" href="#"><span className="portfolio-icon" ><i className="fa fa-link" ></i></span></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: "50px" }}>
                                                <form onSubmit={handleDonationSubmit}>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form3Example1cg">Amount monney donate for project!</label>
                                                        <input value={donationAmount}
                                                        onChange={(e) => setDonationAmount(e.target.value)} type="number" min={0} id="form3Example1cg" className="form-control form-control-lg" />
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <input style={{ borderRadius: "15px" }} type="submit" value="Donate for project" class="wpcf7-form-control wpcf7-submit" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>

            </section>
        </section>
    )
}
export default Donate;