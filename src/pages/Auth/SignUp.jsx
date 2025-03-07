import './Auth.css';
import Logo from '../../assets/icon.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { registerUser } from '../../firebase';
import Loader from '../../components/Loader/Loader';
import AppHelmet from '../../components/AppHelmet';

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setSuccess(null);
        setError(null);
        setIsLoading(true);


        setTimeout(() => {
            // Call the registerUser function
            registerUser(email, password, { firstName, lastName }, setSuccess, setError);
            setIsLoading(false); // Once the registration attempt finishes
        }, 1000)
    }


    useEffect(() => {
        error && setTimeout(() => {
            setError(null);
        }, 3000);

        success && setTimeout(() => {
            setSuccess(null);
            setEmail('');
        }, 2000);
    }, [error, success]);

    return (
        <>
            <AppHelmet title={"Sign Up"} />
            {
                isLoading ? <Loader /> : <section className="speedyui speedyui-sign-in py-5">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-7 col-xl-5">
                                <div className="form-wrapper py-md-4">
                                    {/* Error & Success Feedback */}
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    {success && <div className="alert alert-success">{success}</div>}
                                    <div className="logo-wrapper text-center pb-lg-5 pb-2">
                                        <img
                                            src={Logo}
                                            alt="Logo"
                                            height="40"
                                            width={80}
                                        />
                                    </div>
                                    <form className="sign-in-form" onSubmit={handleRegister}>
                                        <h3 className="display-6 fw-semibold mb-3 text-muted text-center">Get Started!</h3>
                                        <div className="d-flex justify-content-between align-items-center mb-3 gap-1">
                                            <input
                                                id="name"
                                                type="text"
                                                className="form-control bg-white"
                                                placeholder="First name"
                                                value={firstName}
                                                onChange={e => setFirstName(e.target.value)}
                                                autoFocus
                                                required
                                            />
                                            <input
                                                id="name"
                                                type="text"
                                                className="form-control bg-white"
                                                placeholder="Last name"
                                                value={lastName}
                                                onChange={e => setLastName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id="email"
                                                type="email"
                                                className="form-control bg-white"
                                                placeholder="Email address"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control bg-white"
                                                placeholder="Password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn primary-btn shadow w-100 mb-2" onClick={() => setModalOpen(true)}>
                                            Sign Up
                                        </button>
                                        <p className="mt-4 text-center text-muted">
                                            Already have an account?
                                            <NavLink to="/login" className="text-decoration-none text-dark"> Login</NavLink>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default SignUp;
