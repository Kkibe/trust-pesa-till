import React, { useContext, useEffect, useState } from 'react'
import { LoanContext } from '../../LoanContext';
import { useNavigate } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import { AuthContext } from '../../AuthContext';

export default function Summary({ nextStep, prevStep }) {
    const { loanItem } = useContext(LoanContext);
    const [paid, setPaid] = useState(false);
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const componentProps = {
        reference: (new Date()).getTime().toString(),
        email: currentUser ? currentUser.email : "coongames8@gmail.com",
        amount: loanItem.fees * 100,
        publicKey: 'pk_test_962ccd4857c5911b060146f94f6e7b772ad063a1',
        currency: "KES",
        text: 'Accept & Proceed',
        onSuccess: (response) => setPaid(true),
        onClose: () => { },
    };

    return (
        <section className="speedyui speedyui-sign-in">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-7 col-xl-5">
                        <div className="form-wrapper py-md-4">
                            {
                                !paid ? (<div className="mb-3">
                                    <div className="alert alert-danger">
                                        To finish with your loan application, a non-refundable processing fee of KSH {loanItem.fees} is required.
                                    </div>
                                    <h2>Loan Summary</h2>
                                    <div className="d-flex align-items-center justify-content-between shadow-sm p-2">
                                        <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Loan Type:</p>
                                        <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>{loanItem.type}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between shadow-sm p-2">
                                        <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Pricipal Amount:</p>
                                        <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>KSH {loanItem.amount}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between shadow-sm p-2">
                                        <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Yearly Interest(5%):</p>
                                        <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>KSH {0.05 * loanItem.amount}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between shadow-sm p-2">
                                        <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Total Repayment:</p>
                                        <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>KSH {(0.05 * parseFloat(loanItem.amount) + parseFloat(loanItem.amount)).toFixed(2)}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between shadow-sm p-2">
                                        <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Processing Fee:</p>
                                        <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>KSH {loanItem.fees}</p>
                                    </div>
                                    <div className="d-flex w-100 align-items-center justify-content-between my-3">
                                        <button type="button" className="btn primary-btn shadow  mb-2" onClick={prevStep}>
                                            Previous
                                        </button>
                                        <div className="text-end">
                                            <PaystackButton {...componentProps} className="btn primary-btn shadow  mb-2" />
                                        </div>
                                    </div>
                                </div>) : (<div className="alert-box">
                                    <div className="alert alert-success">
                                        <div className="alert-icon text-center">
                                            ✅
                                        </div>
                                        <div className="alert-message text-center">
                                            <strong>Success!</strong>
                                        </div>
                                        <p className="text-start">Your loan application was submitted successfully and is being processed.</p>
                                        <p className="text-start my-3">{loanItem.amount && `KSH ${loanItem.amount} will be disbursed to your ${loanItem.phone} once approved.`}</p>
                                    </div>
                                    <div className="text-end">
                                        <button type="button" className="btn primary-btn shadow  mb-2" onClick={() => navigate("/")}>
                                            Finish
                                        </button>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
