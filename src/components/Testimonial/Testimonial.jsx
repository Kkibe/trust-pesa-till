import React from "react";
import Image1 from '../../assets/maria_wanjiku.jpg';
import Image2 from '../../assets/john_mwangi.jpg';
import Image3 from '../../assets/anna_achieng.jpg';
import Image4 from '../../assets/kevin_otieno.jpg';
import Image5 from '../../assets/faith_njeri.jpg';
import Image6 from '../../assets/brian_kiptoo.jpg';
import Image7 from '../../assets/lucy_nduta.jpg';

const Testimonial = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide text-center" data-bs-ride="carousel">
            <h3>What Our Clients Say</h3>
            <div className="carousel-inner my-3 py-3">
                {[
                    {
                        "img": Image1,
                        "name": "Maria Wanjiku",
                        "role": "Small Business Owner",
                        "text": "This platform saved my business! I applied for a loan and got the money instantly on my M-Pesa. The low interest rates and flexible repayment terms make it the best lending service I’ve used.",
                        "active": true,
                        "rating": 5
                    },
                    {
                        "img": Image2,
                        "name": "John Mwangi",
                        "role": "Freelance Web Developer",
                        "text": "I needed quick cash to complete a project, and this service delivered. No paperwork, no guarantors—just fast and reliable loans straight to my phone!",
                        "active": false,
                        "rating": 5
                    },
                    {
                        "img": Image3,
                        "name": "Anna Achieng",
                        "role": "Event Planner",
                        "text": "The process was super smooth. Within minutes, my loan was approved and sent to my M-Pesa. I love the convenience and transparency of this platform!",
                        "active": false,
                        "rating": 5
                    },
                    {
                        "img": Image4,
                        "name": "Kevin Otieno",
                        "role": "Boda Boda Rider",
                        "text": "I was stuck with an urgent school fees, and this loan helped me get back on the road instantly. No hidden fees, just a simple and fair process!",
                        "active": false,
                        "rating": 4
                    },
                    {
                        "img": Image5,
                        "name": "Faith Njeri",
                        "role": "Salon Owner",
                        "text": "Getting a loan without paperwork or guarantors was a game-changer for my business. Now I can restock my products without stress!",
                        "active": false,
                        "rating": 5
                    },
                    {
                        "img": Image6,
                        "name": "Brian Kiptoo",
                        "role": "University Student",
                        "text": "As a student, I sometimes need emergency cash for school expenses. This platform has been my go-to for fast and reliable loans!",
                        "active": false,
                        "rating": 4
                    },
                    {
                        "img": Image7,
                        "name": "Lucy Nduta",
                        "role": "Online Seller",
                        "text": "I love how easy it is to get a loan here. It helps me buy stock quickly and grow my online business without delays.",
                        "active": false,
                        "rating": 4
                    }
                ].map((item, index) => (
                    <div key={index} className={`carousel-item ${item.active ? "active" : ""}`}>

                        <div className="row d-flex justify-content-center flex-d-row">
                            <div className="col-lg-8">
                                <div className="d-flex justify-content-evenly align-items-center  mb-4">
                                    <img className="rounded-circle shadow-1-strong" src={item.img} alt="avatar" style={{ width: "60px" }} />
                                    <h5 className="mb-3">{item.name}</h5>
                                </div>

                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            {
                                item.rating === 4 ? <>{[...Array(4)].map((_, i) => (
                                    <li key={i}><i className="fas fa-star fa-sm"></i></li>
                                ))}
                                    <li><i className="far fa-star fa-sm"></i></li></> : <>
                                    {[...Array(5)].map((_, i) => (
                                        <li key={i}><i className="fas fa-star fa-sm"></i></li>
                                    ))}
                                </>
                            }
                        </ul>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                style={{
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}>
                <span className="carousel-control-prev-icon text-body" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
                style={{
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}>
                <span className="carousel-control-next-icon text-body" aria-hidden="true" ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    );
};

export default Testimonial;
