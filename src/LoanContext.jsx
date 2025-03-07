import { createContext, useState } from "react";

export const LoanContext = createContext();

export const LoanContextProvider = ({ children }) => {
    const [loanItem, setLoanItem] = useState({}); // Initialize as an empty object

    // Function to update specific key-value pairs
    const updateLoanItem = (newValues) => {
        setLoanItem((prev) => ({
            ...prev,
            ...newValues, // Merge the new values into the existing object
        }));
    };

    return (
        <LoanContext.Provider value={{ loanItem, updateLoanItem }}>
            {children}
        </LoanContext.Provider>
    );
};
