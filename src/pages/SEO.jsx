import { Helmet } from "react-helmet-async";

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title} | PataPesa Africa</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | PataPesa Africa`} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}