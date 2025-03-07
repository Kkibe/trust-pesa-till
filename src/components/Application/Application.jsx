import React, { useState } from "react";
import "./Application.css";
import PersonalDetails from "./PersonalDetails";
import IncomeDetails from "./IncomeDetails";
import LoanDetails from "./LoanDetails";
import Summary from "./summary";
import AppHelmet from "../AppHelmet";

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const updateProgressBar = () => {
        return ((currentStep - 1) / 3) * 100;
    };

    const goToStep = (stepNumber) => {
        if (stepNumber >= 1 && stepNumber <= 4) {
            setCurrentStep(stepNumber);
        }
    };

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <div className="container-fluid my-3">
            <AppHelmet title={"Loan Application"} />
            <div className="progress px-1" style={{ height: "3px" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${updateProgressBar()}%` }}
                    aria-valuenow={updateProgressBar()}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>

            <div className="step-container d-flex justify-content-between">
                {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="step-circle" >
                        {num}
                    </div>
                ))}
            </div>

            <div>
                {currentStep === 1 && (
                    <div className="step animate__animated animate__fadeInRight">
                        <PersonalDetails nextStep={nextStep} />
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="step animate__animated animate__fadeInRight">
                        <IncomeDetails nextStep={nextStep} prevStep={prevStep} />
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="step animate__animated animate__fadeInRight">
                        <LoanDetails nextStep={nextStep} prevStep={prevStep} />
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="step animate__animated animate__fadeInRight speedyui speedyui-sign-in">
                        <Summary nextStep={nextStep} prevStep={prevStep} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
