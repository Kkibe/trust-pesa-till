import { useEffect, useState } from "react";

const IncomeDetails = ({ nextStep, prevStep }) => {
    const [income, setIncome] = useState("");
    const [status, setStatus] = useState("");
    const [salary, setSalary] = useState("");
    const [error, setError] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        if (!income || !status || !salary) {
            setError("Please fill in all required fields!");
            return;
        }
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
                                <h3 className="display-6 fw-semibold mb-3 text-muted text-center">Income Details</h3>
                                <div className="mb-3">
                                    <select
                                        name="income"
                                        id="income"
                                        className="form-control bg-white"
                                        value={income}
                                        onChange={e => setIncome(e.target.value)}
                                    >
                                        <option value="" disabled>Source of Income</option>
                                        <option value="salary">Salary</option>
                                        <option value="business">Business</option>
                                        <option value="self_employed">Self Employed</option>
                                        <option value="investment">Investment</option>
                                        <option value="other">Other</option>
                                    </select>

                                </div>
                                <div className="mb-3">
                                    <select
                                        name="employment-status"
                                        id="employment-status"
                                        className="form-control bg-white"
                                        value={status}
                                        onChange={e => setStatus(e.target.value)}
                                    >
                                        <option value="" disabled>Employment Status</option>
                                        <option value="permanent">Permanent</option>
                                        <option value="contract">Contract</option>
                                        <option value="self_employed">Self Employed</option>
                                        <option value="unemployed">Unemployed</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="salary"
                                        id="salary"
                                        className="form-control bg-white"
                                        value={salary}
                                        onChange={e => setSalary(e.target.value)}
                                    >
                                        <option value="" disabled>Monthly Salary. (In Ksh)</option>
                                        <option value="01">Below 10k</option>
                                        <option value="02">10-25k</option>
                                        <option value="03">25-50k</option>
                                        <option value="04">50-75k</option>
                                        <option value="05">Above 100k</option>
                                    </select>
                                </div>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <button type="button" className="btn primary-btn shadow  mb-2" onClick={prevStep}>
                                        &laquo; Previous
                                    </button>
                                    <div className="text-end">
                                        <button type="submit" className="btn primary-btn shadow  mb-2">
                                            Next &raquo;
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IncomeDetails;
