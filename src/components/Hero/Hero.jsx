import { NavLink } from 'react-router-dom';
import './Hero.css';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import Image from '../../assets/loan-approved.webp';

const HeroSection = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <section className="speedyui speedyui-hero overflow-hidden">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 py-2">
                        <div className="hero-content">
                            <h1 className="display-4 fw-semibold mb-4">
                                Get Online Loans To Your M-pesa
                            </h1>
                            <span className="hero-sub-heading fw-semibold fs-5 mb-2 d-inline-block text-uppercase">
                                Good or Bad Credit, We Can Help
                            </span>
                            <p className="text-secondary mb-5 fs-5 fw-light">
                                You can qualify for upto Ksh 100,000 instant loan to MPESA
                            </p>
                            {
                                currentUser ? <NavLink to="/apply" className="secondary-btn text-decoration-none d-inline-block">
                                    <span className="px-3 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-play-circle me-2" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                        </svg>
                                        Apply Now
                                    </span>
                                </NavLink> : <NavLink to="/register" className="btn btn-md px-5 py-3 me-3 primary-btn rounded-0 border-0">
                                    Get started
                                </NavLink>
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 py-3">
                        <div className="hero-img-wrapper shadow mx-auto my-3">
                            <img src={Image} className="img-fluid hero-img" alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle position-absolute"></div>
        </section>
    );
};

export default HeroSection;
