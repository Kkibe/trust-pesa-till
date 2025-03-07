import { NavLink } from 'react-router-dom';
import './404error.css';

const Error404 = () => {
    return (
        <section className="speedyui speedyui-404 py-5 bg-light position-relative">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 col-xl-6 my-3 text-center text-md-start">
                        <h1 className="display-1 mb-2 fw-semibold">404</h1>
                        <h3 className="fs-1 mb-3">Sorry, Something Went Wrong</h3>
                        <p className="fs-5 mb-5 text-muted">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                        <NavLink to="/" className="btn primary-btn px-5 py-3 rounded-2 shadow">Back to Home</NavLink>
                    </div>
                    <div className="col-md-6 my-3">
                        <div className="text-center">
                            <img
                                src="https://speedyui-static.s3.amazonaws.com/error-404/error-3/404-error.png"
                                className="img-fluid"
                                alt="404 Error"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle position-absolute d-none d-md-block"></div>
        </section>
    );
};

export default Error404;