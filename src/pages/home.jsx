import React from 'react'
import HowItWorks from '../components/how-it-works/how'
import HeroSection from '../components/Hero/Hero'
import ContentSection from '../components/ContentSection/ContentSection'

function Home() {
    return (
        <>
            <HeroSection />
            <ContentSection />
            <HowItWorks />
        </>
    )
}

export default Home