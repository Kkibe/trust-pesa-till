import React from 'react'
import HowItWorks from '../components/how-it-works/how'
import FAQSection from '../components/FAQSection/FAQSection'
import CtaSection from '../components/CtaSection/CtaSection'
import AppHelmet from '../components/AppHelmet'

function About() {
    return (
        <>
            <AppHelmet title={"About Us"} />
            <CtaSection />
            <HowItWorks />
            <FAQSection />
        </>
    )
}

export default About;