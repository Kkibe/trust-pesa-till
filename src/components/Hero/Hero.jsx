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
                                currentUser ? <NavLink to="/apply" className="btn btn-md px-5 py-3 me-3 primary-btn rounded-0 border-0">
                                    Get started
                                </NavLink> : <NavLink to="/register" className="btn btn-md px-5 py-3 me-3 primary-btn rounded-0 border-0">
                                    Apply Now
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
