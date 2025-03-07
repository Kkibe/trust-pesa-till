import './how.css';

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
                                src="https://speedyui-static.s3.amazonaws.com/how-it-works/how-it-works/how-it-works-7/img.jpg"
                                className="img-fluid rounded-3"
                                alt="How It Works"
                            />
                            <div className="circle-shape rounded-pill position-absolute top-100 start-0 translate-middle"></div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="content-wrapper">
                            <div className="row">
                                {["Find Your Style", "Register Account", "Start Creating", "Start Creating"].map((title, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="feature-wrapper d-flex flex-column text-center text-md-start my-xl-2 py-2">
                                            <div className="mb-3">
                                                <span className="number-wrapper fs-5 fw-semibold rounded-pill d-inline-flex align-items-center justify-content-center">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <div className="feature-info">
                                                <h5 className="fw-semibold mb-3">{title}</h5>
                                                <p className="fs-6 text-muted fw-light lh-lg">
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit et fames maecenas amet est scelerisque lectus tortor sit
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
