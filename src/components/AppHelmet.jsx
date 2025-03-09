import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function AppHelmet({ title }) {
    const location = useLocation();
    const canonicalUrl = `${window.location.origin}${location.pathname}`;

    return (
        <Helmet>
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="/manifest.json" crossorigin="anonymous" />
            <link rel="shortcut icon" type="image/x-icon" href="/logo512.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            <meta name="theme-color" content="#c13df51a" />
            <meta
                name="description"
                content="Get instant online loans sent directly to your M-Pesa. No paperwork, no guarantors—just fast approval, low-interest rates, and flexible repayment. Apply now!"
            />
            <meta name="keywords" content="instant loans, online loans, M-Pesa loans, quick loans, personal loans, fast loan approval, no guarantor loans, low interest loans, mobile loans, emergency loans, same day loans, easy loan application, short term loans, cash loans, loan disbursement" />
            <meta name="author" content="TrustPesa" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph tags for social media */}
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content="Get instant online loans sent directly to your M-Pesa. No paperwork, no guarantors—just fast approval, low-interest rates, and flexible repayment. Apply now!"
            />
            <meta property="og:image" content={`${window.location.origin}/logo512.png`} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta
                name="twitter:description"
                content="Get instant online loans sent directly to your M-Pesa. No paperwork, no guarantors—just fast approval, low-interest rates, and flexible repayment. Apply now!"
            />
            <meta name="twitter:image" content={`${window.location.origin}/logo512.png`} />
            <meta name="google-site-verification" content="-D3IYDAgJdZnqRkgCB7jGGaeKfmB2S7lI5RWLIYqB0c" />
            <title>TrustPesa - {title}</title>
        </Helmet>
    );
}
