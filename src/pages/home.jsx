import React from 'react'
import HowItWorks from '../components/how-it-works/how'
import HeroSection from '../components/Hero/Hero'
import ContentSection from '../components/ContentSection/ContentSection'
import AppHelmet from '../components/AppHelmet'

function Home() {
    return (
        <>
            <AppHelmet title={"Instant Loans To Mpesa"} />
            <HeroSection />
            <ContentSection />
            <HowItWorks />
        </>
    )
}

export default Home