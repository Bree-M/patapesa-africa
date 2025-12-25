// src/components/PageTitle.jsx - NEW FILE (React 19 Compatible)
import { useEffect } from "react";

export default function PageTitle({ title, description }) {
  useEffect(() => {
    document.title = `${title} | PataPesa Africa`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Optional: Open Graph
    updateMeta("og:title", `${title} | PataPesa Africa`);
    updateMeta("og:description", description);

    return () => {
      document.title = "PataPesa Africa";
      if (metaDesc) metaDesc.content = "Secure, neutral platform connecting users to verified financial providers across Africa.";
    };
  }, [title, description]);

  return null;
}

function updateMeta(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}