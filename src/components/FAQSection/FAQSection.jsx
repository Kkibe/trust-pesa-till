import './FAQSection';

const FAQSection = () => {
    return (
        <section className="speedyui speedyui-faq" id='faqs'>
            <div className="container-fluid">
                <div className="row justify-content-center text-center mb-md-5 mb-3">
                    <div className="col-12">
                        <span className="sub-title rounded-pill text-uppercase px-4 d-inline-block mb-2">FAQ</span>
                        <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
                    </div>
                </div>
                <div className="accordion row justify-content-center accordion-flush" id="accordionFlushExample">
                    <div className="col-lg-8">
                        {faqData.map((item, index) => (
                            <div key={index} className="accordion-item border-0 mb-2">
                                <h2 className="accordion-header" id={`flush-heading${index}`}>
                                    <button
                                        className="accordion-button fs-6 fw-semibold py-3 rounded-0 collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#flush-collapse${index}`}
                                        aria-expanded="false"
                                        aria-controls={`flush-collapse${index}`}
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={`flush-collapse${index}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`flush-heading${index}`}
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p className="text-muted">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const faqData = [
    { question: "What is if I do not have any required documents?", answer: "We all dislike paperwork and unnecessary questions. That's why we have worked to reduce these questions to as few as possible. There is no longer any need for documents, those days have gone." },
    { question: "Can I repay my loan in installments?", answer: "Loans can be split into multiple instalments or just one large repayment. For larger amounts you can divide your loan into as many as 36 monthly repayments." },
    { question: "What types of loan services do you offer?", answer: "We offer instant online personal, mortgage, emergency, business, educational and medical loans disbursed directly to your M-Pesa account. Our loans come with low-interest rates, flexible repayment periods, and no need for guarantors or paperwork. Simply apply online and receive your funds instantly!" },
    { question: "Is financing loans available to small businesses?", answer: "Yes! Loans are advantageous as a relatively inexpensive way of borrowing money.Start or grow your own business." },
    { question: "Easy Loans called me and asked for an upfront insurance fee. Should I pay it?", answer: "No, please stop immediately! We will never cold call or email you. There are groups out there attempting to convince people that they are us - they aren't. Any money you pay anyone upfront for a loan will be lost. Never pay anyone upfront, for any reason. We can't stress this enough." },
    { question: "How Quickly Will I Receive A Decision?", answer: "You should receive the money almost instantly. When your loan is accepted, you should immediately receive a text message of loan approval. As soon as you receive that message, the funds will be on there way to your mpesa account." }
];

export default FAQSection;
