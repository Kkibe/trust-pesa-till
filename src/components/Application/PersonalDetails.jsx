import { useContext, useEffect, useState } from "react";
import { LoanContext } from "../../LoanContext";

const PersonalDetails = ({ nextStep }) => {
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [error, setError] = useState(null);
    const { updateLoanItem } = useContext(LoanContext);

    const handleClick = (e) => {
        e.preventDefault();
        if (!id || !phone || !dob) {
            setError("Please fill in all required fields!");
            return;
        }
        updateLoanItem({ phone: phone })
        nextStep()
    }

    useEffect(() => {
        error && setTimeout(() => {
            setError(null);
        }, 3000);
    }, [error]);

    return (
        <section className="speedyui speedyui-sign-in">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-7 col-xl-5">
                        <div className="form-wrapper py-md-4">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form className="sign-in-form" onSubmit={handleClick}>
                                <h3 className="display-6 fw-semibold mb-3 text-muted text-center">Personal Details</h3>
                                <div className="mb-3">
                                    <input
                                        id="id_number"
                                        type="number"
                                        className="form-control bg-white"
                                        placeholder="National ID"
                                        value={id}
                                        onChange={e => setId(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="form-control bg-white"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </div>
                                <label htmlFor="date" className="text-muted">Date of birth</label>
                                <div className="mb-3">
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        min="1901-01-01"
                                        max="2007-12-31"
                                        className="form-control bg-white"
                                        value={dob}
                                        onChange={e => setDob(e.target.value)}
                                    />
                                </div>

                                <div className="text-end">
                                    <button type="submit" className="btn primary-btn shadow  mb-2">
                                        Next &raquo;
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalDetails;
