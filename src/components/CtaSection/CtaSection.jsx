import { useContext } from 'react';
import './CtaSection.css';
import { AuthContext } from '../../AuthContext';
import { NavLink } from 'react-router-dom';

const CtaSection = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <section className="speedyui speedyui-cta position-relative text-center">
            <div className="container-fluid">
                <span className="label text-white mb-0">Trust Pesa Online Credit Services</span>
                <h3 className="display-5 text-white mb-5 mt-3">smart credit for smart people</h3>
                <button className="btn speedyui-btn rounded-pill">
                    <span className="btn-wrapper position-relative d-inline-block">
                        <span className="position-relative top-0 start-0 d-inline-block text-nowrap">{currentUser ? <NavLink to="/apply">Get Started</NavLink> : <NavLink to="/register">Get Started</NavLink>}</span>
                        <span className="position-absolute top-0 start-0 d-inline-block text-nowrap">{currentUser ? <NavLink to="/apply">Get Started</NavLink> : <NavLink to="/register">Get Started</NavLink>}</span>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default CtaSection;
