import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from "./AuthContext";
import { LoanContextProvider } from './LoanContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <LoanContextProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </LoanContextProvider>
  </AuthContextProvider>
  ,
)
