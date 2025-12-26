import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, type = "website" }) {
  const { pathname } = useLocation();
  const siteUrl = "https://patapesa.africa"; // Replace with your actual domain
  const fullUrl = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title} | PataPesa Africa</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} | PataPesa Africa`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} /> {/* Make sure this image exists */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | PataPesa Africa`} />
      <meta name="twitter:description" content={description} />

      {/* Fintech Specific: Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "PataPesa Africa",
          "url": siteUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Olenguruone Ave, Lavington",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "description": "Non-custodial fintech platform for digital finance and wellness provider matching."
        })}
      </script>
    </Helmet>
  )};