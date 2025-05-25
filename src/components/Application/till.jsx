import { useContext, useRef } from 'react'
import { LoanContext } from '../../LoanContext';

export default function Till({ nextStep, prevStep }) {
    const { loanItem } = useContext(LoanContext);
    const tillRef = useRef();

    const copyToBoard = (e) => {
        e.preventDefault();
        const tillText = tillRef.current?.innerText;
        if (tillText) {
            navigator.clipboard.writeText(tillText)
                .then(() => alert('Till number copied!'))
                .catch((err) => console.error('Copy failed:', err));
        }
    };


    return (
        <section className="speedyui speedyui-sign-in">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-7 col-xl-5">
                        <div className="form-wrapper py-md-4">
                            <div className="mb-3">
                                <div className="alert alert-danger">
                                    To finish with your loan application, an exercise duty fee of KSH {loanItem.fees} is required.
                                </div>
                                <h4>HOW TO MAKE PAYMENT</h4>
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Go To M-pesa:</p>
                                    <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>M-pesa</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Lipa Na M-pesa:</p>
                                    <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>Buy Goods And Services</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Enter Till Number:</p>
                                    <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark' ref={tillRef}>5881981</p>
                                </div>
                                <div className="text-end p-2">
                                    <button type="button" className="btn shadow mb-2 p-2 badge bg-warning text-dark" onClick={copyToBoard}>
                                        <span>CLICK TO COPY TILL</span> <i className='fa fa-clone' />
                                    </button>
                                </div>
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Enter Amount:</p>
                                    <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>KSH {loanItem.fees}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <p className='text-left text-capitalize lh-base text-truncatev text-secondary'>Complete Payment:</p>
                                    <p className='text-left text-capitalize font-weight-bold lh-base text-truncatev text-dark'>Enter M-pesa Pin</p>
                                </div>
                                <div className="d-flex w-100 align-items-center justify-content-between my-3">
                                    <button type="button" className="btn primary-btn shadow  mb-2" onClick={prevStep}>
                                        &laquo; Previous
                                    </button>
                                    <div className="text-end">
                                        <button className="btn primary-btn shadow  mb-2" onClick={nextStep}>Verify Payment &raquo;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
