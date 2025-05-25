import React, { useContext, useEffect, useState } from 'react'
import { LoanContext } from '../../LoanContext';
import { useNavigate } from 'react-router-dom';

export default function Summary({ nextStep, prevStep }) {
    const { loanItem } = useContext(LoanContext);
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState(null);
    const [mpesaText, setMpesaText] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        error && setTimeout(() => {
            setError(null);
        }, 3000);
    }, [error]);



    /*const parseMpesaMessage = (message) => {
        const regex = /Ksh\s?([\d,]+\.\d{2})\s+paid to\s+(.+?)\.\s+on\s+(\d{1,2}\/\d{1,2}\/\d{2})\s+at\s+(\d{1,2}:\d{2}\s+[APMapm]{2})/;
        const match = message.match(regex);

        if (!match) return null;

        const [_, amountStr, receiver, date, time] = match;

        const amount = parseFloat(amountStr.replace(',', ''));
        const formattedDate = `${date} ${time}`;

        // Convert to Date object
        const dateTime = new Date(formattedDate);

        return {
            amount,
            receiver: receiver.trim().toUpperCase(),
            datetime: dateTime,
        };
    };*/

    const parseMpesaMessage = (message) => {
        const regex = /Ksh\s?([\d,]+\.\d{2})\s+paid to\s+(.+?)\.\s+on\s+(\d{1,2})\/(\d{1,2})\/(\d{2})\s+at\s+(\d{1,2}):(\d{2})\s+([APMapm]{2})/;
        const match = message.match(regex);

        if (!match) return null;

        const [
            _,
            amountStr,
            receiver,
            day,
            month,
            year,
            hourRaw,
            minutes,
            meridian,
        ] = match;

        const amount = parseFloat(amountStr.replace(',', ''));
        let hour = parseInt(hourRaw, 10);
        const minute = parseInt(minutes, 10);
        const yr = parseInt(`20${year}`, 10); // convert '25' to 2025
        const mm = parseInt(month, 10) - 1; // JavaScript months are 0-based
        const dd = parseInt(day, 10);

        if (meridian.toUpperCase() === 'PM' && hour !== 12) hour += 12;
        if (meridian.toUpperCase() === 'AM' && hour === 12) hour = 0;

        const dateTime = new Date(yr, mm, dd, hour, minute);

        return {
            amount,
            receiver: receiver.trim().toUpperCase(),
            datetime: dateTime,
        };
    };



    const verifyMpesaDetails = ({ amount, receiver, datetime }) => {
        const expectedReceiver = "MOBICOM INTERNATIONAL 1";
        const expectedAmount = loanItem.fees;
        const now = new Date();

        const diffMinutes = Math.abs((now - datetime) / (1000 * 60));

        return (
            receiver === expectedReceiver &&
            amount === expectedAmount &&
            diffMinutes <= 30//1440  Allows up to 24 hours
        );
    };

    const handleVerify = () => {
        const parsed = parseMpesaMessage(mpesaText);

        if (!parsed) {
            setError("Invalid M-Pesa message format.");
            return;
        }

        if (!verifyMpesaDetails(parsed)) {
            setError("M-Pesa details do not match or are too old.");
            return;
        }
        setPaid(true)
    };

    return (
        <section className="speedyui speedyui-sign-in">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-7 col-xl-5">
                        <div className="form-wrapper py-md-4">
                            {
                                !paid ? (<div className="mb-3">
                                    <h3 className="display-6 fw-semibold mb-3 text-muted text-center">Payment Verification</h3>
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    <label htmlFor="mpesaMessage" className="text-muted badge bg-warning text-dark">Paste M-Pesa Message:</label>
                                    <div className="my-3">
                                        <textarea
                                            id="mpesaMessage"
                                            className="form-control bg-white"
                                            rows="4"
                                            value={mpesaText}
                                            onChange={(e) => setMpesaText(e.target.value)}
                                            placeholder="Paste the full M-Pesa message here"
                                            autoFocus
                                        />
                                    </div>

                                    <div className="d-flex w-100 align-items-center justify-content-between my-3">
                                        <button type="button" className="btn btn-secondary shadow" onClick={prevStep}>
                                            &laquo; Previous
                                        </button>
                                        <div className="text-end">
                                            <button type="button" className="btn btn-success shadow" onClick={handleVerify}>
                                                Verify M-Pesa &raquo;
                                            </button>
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
                                        <div className="alert alert-success">
                                            <p className="text-start">Your loan application was submitted successfully and is being processed. {loanItem.amount && `KSH ${loanItem.amount} will be disbursed your ${loanItem.phone} once approved.`}</p>
                                        </div>
                                        <div className="mb-2">
                                            <h4>Loan Summary</h4>
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

                                            <div className="text-end mt-3">
                                                <button type="button" className="btn primary-btn shadow" onClick={() => navigate("/")}>
                                                    Finish
                                                </button>
                                            </div>
                                        </div>
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
