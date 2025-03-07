import './how.css';
import Image from '../../assets/loan-approval.jpg';
const HowItWorks = () => {
    return (
        <section className="speedyui speedyui-work-process py-5" id='how-it-works'>
            <div className="container-fluid">
                <div className="row mb-2 justify-content-center text-center">
                    <div className="col-lg-7 col-md-10">
                        <h2 className="display-6 fw-semibold mb-3">How It Works</h2>
                        <p className="text-muted">
                            Get Instant Loan To MPESA In 4 Easy Steps
                        </p>
                    </div>
                </div>
                <div className="row gx-lg-5 align-items-lg-center">
                    <div className="col-lg-5">
                        <div className="position-relative">
                            <img
                                src={Image}
                                className="img-fluid rounded-3"
                                alt="How It Works"
                            />
                            <div className="circle-shape rounded-pill position-absolute top-100 start-0 translate-middle"></div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="content-wrapper">
                            <div className="row">
                                {[{
                                    title: "Register Your Account",
                                    description: "Create an account with us for quick and secure processing of your loan application.",
                                },
                                {
                                    title: "Apply for a Loan",
                                    description: "Complete a simple online application form with your loan details.",
                                },
                                {
                                    title: "Get Approved Fast",
                                    description: "Our system quickly reviews your application, and we approve your loan within 24 hours.",
                                },
                                {
                                    title: "Receive Funds Instantly",
                                    description: "Once approved, your loan is disbursed directly to your M-Pesa account—no paperwork, no hassle.",
                                }].map((item, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="feature-wrapper d-flex flex-column text-center text-md-start my-xl-2 py-2">
                                            <div className="mb-3">
                                                <span className="number-wrapper fs-5 fw-semibold rounded-pill d-inline-flex align-items-center justify-content-center">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <div className="feature-info">
                                                <h5 className="fw-semibold mb-3">{item.title}</h5>
                                                <p className="fs-6 text-muted fw-light lh-lg">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
