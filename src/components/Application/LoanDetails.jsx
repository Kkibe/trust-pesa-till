import { useContext, useEffect, useState } from "react";
import { LoanContext } from "../../LoanContext";

const LoanDetails = ({ nextStep, prevStep }) => {

    const options = [
        { value: 5000, label: "5000" },
        { value: 7500, label: "7500" },
        { value: 10000, label: "10000" },
        { value: 15000, label: "15000" },
        { value: 20000, label: "20000" },
        { value: 25000, label: "25000" },
        { value: 30000, label: "30000" },
        { value: 35000, label: "35000" },
        { value: 40000, label: "40000" },
        { value: 45000, label: "45000" },
        { value: 50000, label: "50000" },
        { value: 55000, label: "55000" },
        { value: 60000, label: "60000" },
        { value: 65000, label: "65000" },
        { value: 70000, label: "70000" },
        { value: 75000, label: "75000" },
        { value: 80000, label: "80000" },
        { value: 85000, label: "85000" },
        { value: 90000, label: "90000" },
        { value: 95000, label: "95000" },
        { value: 100000, label: "100000" }
    ];

    const [selectedPrice, setSelectedPrice] = useState("");
    const [sliderValue, setSliderValue] = useState(2);
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState(null);
    const [loanType, setLoanType] = useState("");

    const { updateLoanItem } = useContext(LoanContext);

    const handleClick = (e) => {
        e.preventDefault();
        if (!loanType || !selectedPrice) {
            setError("All fields are required!");
            return;
        } else if (!agreed) {
            setError("Agree to terms of agreement to continue!");
            return;
        }
        updateLoanItem({
            amount: selectedPrice,
            type: loanType,
            duration: sliderValue,
            fees: applicationFee(),
        });
        nextStep()
    }

    useEffect(() => {
        error && setTimeout(() => {
            setError(null);
        }, 3000);
    }, [error]);

    const getPrice = () => {
        const price = Number(selectedPrice); // Ensure it's a number
        const extraCharge = 1 * 0.05 * price;
        return (price + extraCharge).toFixed(2);
    };
    const applicationFee = () => {
        const price = Number(selectedPrice);
        return price * 0.02
    }
    return (
        <section className="speedyui speedyui-sign-in">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-7 col-xl-5">
                        <div className="form-wrapper py-md-4">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form className="sign-in-form" onSubmit={handleClick}>
                                <div className="mb-3">
                                    <span className="badge bg-warning text-dark ms-2">Get A Quick Loan 5% Interest Rate</span>
                                </div>

                                <div className="mb-3">
                                    <select
                                        name="loan-type"
                                        id="loan-type"
                                        className="form-control bg-white"
                                        value={loanType}
                                        onChange={(e) => setLoanType(e.target.value)}
                                    >
                                        <option value="" disabled>Loan Type</option>
                                        <option value="personal">Personal Loan</option>
                                        <option value="emergency">Emergency Loan</option>
                                        <option value="medical">Medical Loan</option>
                                        <option value="business">Business Loan</option>
                                        <option value="education">Education Loan</option>
                                        <option value="mortgage">Rent/Mortgage Loan</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select name="month" id="month" className="form-control bg-white"
                                        value={selectedPrice}
                                        onChange={(e) => setSelectedPrice(e.target.value)}
                                    >
                                        <option value="" disabled>Application Amount</option>
                                        {
                                            options.map(option => {
                                                return <option value={option.value} key={option.value}>{option.label}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="my-2 gap-10 d-flex flex-column">
                                    <div className="px-3">
                                        <p className=" fw-bold text-secondary">
                                            Repayment Period (Months): {sliderValue}
                                        </p>
                                    </div>
                                    <div className="px-3">
                                        <input
                                            type="range"
                                            className="form-range form-control"
                                            min="1"
                                            max="12"
                                            value={sliderValue}
                                            onChange={(e) => setSliderValue(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="remember"
                                            onChange={(e) => setAgreed(e.target.value)}
                                            checked={agreed}

                                        />
                                        <label className="form-check-label" htmlFor="remember">
                                            <small>I agree to terms of use and policy</small>
                                        </label>
                                    </div>

                                </div>
                                <div className="mb-3">
                                    <p className="fw-bold text-secondary fz-24">
                                        Application Fee: KSH {applicationFee()}
                                    </p>
                                    <p className="fw-bold text-secondary fz-24">
                                        Total Repayment: KSH {getPrice()}
                                    </p>

                                </div>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <button type="button" className="btn primary-btn shadow  mb-2" onClick={prevStep}>
                                        &laquo; Previous
                                    </button>
                                    <div className="text-end">
                                        <button type="submit" className="btn primary-btn shadow  mb-2">
                                            Continue &raquo;
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

export default LoanDetails;
