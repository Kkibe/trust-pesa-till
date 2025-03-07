import { NavLink } from 'react-router-dom';
import './ContentSection';

const ContentSection = () => {
    return (
        <section className="speedyui speedyui-content">
            <div className="container-fluid">
                <div className="row gx-lg-0 align-items-center">
                    {/*<div className="col-lg-5">
                        <div className="content-img-wrap position-relative">
                            <img
                                src="https://speedyui-static.s3.amazonaws.com/content-section/content-4/img-2.jpg"
                                alt=""
                                className="img-fluid content-img-one"
                            />
                            <img
                                src="https://speedyui-static.s3.amazonaws.com/content-section/content-4/img-1.jpg"
                                alt=""
                                className="img-fluid shadow-lg content-img-one"
                            />
                        </div>
                    </div>*/}
                    <div className="col-lg-6 offset-lg-1">
                        <div className="content-wrap my-3">
                            <h2 className="fs-1 fw-bold mb-4">
                                Find Your Loan Eligibility
                            </h2>
                            <p className="fs-5 text-muted mb-4 pb-1">
                                Let us help you sort your expenses - top up a loan, rental loan, car loan, normal or emergencies.
                            </p>
                            <ul className="list-unstyled pt-1">
                                {[
                                    "No CRB check",
                                    "Low intrest rates.",
                                    "Flexible repayment period.",
                                    "No Guarantors required",
                                    "Disbursed to MPESA",
                                    "No Paperwork Required"
                                ].map((item, index) => (
                                    <li key={index} className="fw-semibold mb-2 pb-1">
                                        <span className="me-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
