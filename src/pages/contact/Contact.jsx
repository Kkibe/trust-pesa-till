import './Contact.css';
import PlayStoreImage from '../../assets/play_store.png';
import { NavLink } from 'react-router-dom';
import AppHelmet from '../../components/AppHelmet';

const Contact = () => {
    return (
        <section className="speedyui speedyui-contact">
            <AppHelmet title={"Contact"} />
            <div className="row justify-content-center text-center mb-4">
                <div className="col-xl-7">
                    <span className="heading-label fw-semibold d-block mb-2 text-uppercase">Contact</span>
                    <h3 className="display-6 mb-lg-4 mb-2 fw-semibold">Write us anything</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="contact-form-wrapper h-100 p-4 p-xl-5">
                        <form className="contact-form text-center">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn px-5 py-3 mt-4">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info h-100 p-4 p-xl-5">
                        <div className="contact-feature d-flex align-items-center mb-4">
                            <div className="contact-details">
                                <span className="d-block fw-semibold fs-6 mb-2 text-uppercase">Location :</span>
                                <p className="fs-6 fw-normal text-muted">302 Moi Avenue <br />Nairobi, Kenya 20005</p>
                            </div>
                        </div>
                        <div className="contact-feature d-flex align-items-center mb-4">
                            <div className="contact-details">
                                <span className="d-block fw-semibold fs-6 mb-2 text-uppercase">Email :</span>
                                <NavLink to="mailto:info@trustpesa.com" className="text-decoration-none fs-5 fs-6 fw-normal text-muted">info@trustpesa.com</NavLink>
                            </div>
                        </div>
                        <p className="fw-semibold mt-2">Download Our App</p>
                        <NavLink to="#" className="  rounded-0 mx-1" target='_blank'>
                            <img src={PlayStoreImage} alt="" srcSet="" className="mx-auto" width="100" height="40" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
