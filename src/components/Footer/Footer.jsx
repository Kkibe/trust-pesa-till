import './Footer.css';
import Logo from '../../assets/logo.png';
import PlayStoreImage from '../../assets/play_store.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="speedyui speedyui-footer">
            <div className="container-fluid w-100">
                <div className="row w-100">
                    <div className="col-lg-3 col-md-6 mb-3 w-100">
                        <div className="d-flex align-items-center justify-content-between mb-2 ">
                            <NavLink to="/" className="d-flex align-items-center logo">
                                <img
                                    src={Logo}
                                    className="img-fluid"
                                    alt="Logo"
                                />
                            </NavLink>
                            <div className="text-end">
                                <p className="fw-semibold  my-2">Download Our App</p>
                                <NavLink to="#" className="  rounded-0 mx-1" target='_blank'>
                                    <img src={PlayStoreImage} alt="" srcSet="" className="mx-auto" width="100" height="40" />
                                </NavLink>
                            </div>
                        </div>

                        <p>
                            Get your loan to Mpesa in 5 minutes. Fast and Lower interest rate Mpesa loans. Best Online loan App
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-white my-1 text-center py-2">© {new Date().getFullYear()} TrustPesa, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
