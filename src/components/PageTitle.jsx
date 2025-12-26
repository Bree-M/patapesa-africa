import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle({ title, description, schemaType = "FinancialService" }) {
  const { pathname } = useLocation();
  const siteUrl = "https://patapesa.africa";
  const fullUrl = `${siteUrl}${pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | PataPesa Africa`;

    // 2. Update Standard & OG Meta Tags
    updateMeta("name", "description", description);
    updateMeta("property", "og:title", `${title} | PataPesa Africa`);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", fullUrl);

    // 3. Update Canonical Link (Crucial for 2025 SEO)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // 4. Inject JSON-LD Schema (Fintech Trust Signal)
    const scriptId = "json-ld-schema";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": "PataPesa Africa",
      "url": fullUrl,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    });

    return () => {
      // Reset title on unmount
      document.title = "PataPesa Africa";
    };
  }, [title, description, fullUrl, schemaType]);

  return null;
}

// Optimized Helper Function
function updateMeta(attr, value, content) {
  let tag = document.querySelector(`meta[${attr}="${value}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, value);
    document.head.appendChild(tag);
  }
  tag.content = content;
}