import PageTitle from "../components/PageTitle";

export default function Blog() {
  return (
    <>
<PageTitle title="Blog" description="Financial literacy, market insights, and case studies." />
    <section className="container page-content">
      <h1>Blog & Insights</h1>

      <p className="intro">
        Education-first resources on financial access, literacy, market trends,
        and wellness across Africa. Written for individuals, SMEs, and corporates.
      </p>

      <div className="categories">
        <a href="#how-to-guides" className="category-tag">How-to Guides</a>
        <a href="#market-insights" className="category-tag">Market Insights</a>
        <a href="#case-studies" className="category-tag">Case Studies</a>
        <a href="#financial-literacy" className="category-tag">Financial Literacy</a>
        <a href="#sme-corporate" className="category-tag">SME & Corporate Wellness</a>
      </div>

      <div className="blog-grid">
        <article className="blog-card" id="how-to-guides">
          <div className="blog-meta">
            <span className="category">How-to Guides</span>
            <span className="date">December 2025</span>
          </div>
          <h3>How to Choose the Right SACCO in Kenya</h3>
          <p>
            A step-by-step guide to evaluating dividends, governance, digital services,
            and regulatory compliance when selecting a savings and credit cooperative.
          </p>
          <a href="#" className="read-more">Read more →</a>
        </article>

        <article className="blog-card" id="market-insights">
          <div className="blog-meta">
            <span className="category">Market Insights</span>
            <span className="date">December 2025</span>
          </div>
          <h3>2025 Outlook: Money Market Funds vs Treasury Bills</h3>
          <p>
            Comparing yields, liquidity, risk, and tax implications for Kenyan investors
            in the current high-interest environment.
          </p>
          <a href="#" className="read-more">Read more →</a>
        </article>

        <article className="blog-card" id="case-studies">
          <div className="blog-meta">
            <span className="category">Case Studies</span>
            <span className="date">December 2025</span>
          </div>
          <h3>How a Nairobi SME Reduced Financial Stress for 200 Employees</h3>
          <p>
            Real-world implementation of group savings, salary-linked insurance,
            and wellness coaching through verified providers.
          </p>
          <a href="#" className="read-more">Read more →</a>
        </article>

        <article className="blog-card" id="financial-literacy">
          <div className="blog-meta">
            <span className="category">Financial Literacy</span>
            <span className="date">December 2025</span>
          </div>
          <h3>Understanding Stablecoins: USDT & USDC in African Contexts</h3>
          <p>
            A beginner-friendly explanation of how stablecoins work, their use cases,
            and safe practices for cross-border and local payments.
          </p>
          <a href="#" className="read-more">Read more →</a>
        </article>

        <article className="blog-card" id="sme-corporate">
          <div className="blog-meta">
            <span className="category">SME & Corporate Wellness</span>
            <span className="date">December 2025</span>
          </div>
          <h3>Building a Financial Wellness Program for Your Team</h3>
          <p>
            Practical framework for Kenyan businesses to implement affordable,
            high-impact financial education and access programs.
          </p>
          <a href="#" className="read-more">Read more →</a>
        </article>

        <article className="blog-card coming-soon">
          <div className="blog-meta">
            <span className="category">Coming Soon</span>
          </div>
          <h3>More Insights on the Way</h3>
          <p>
            Subscribe to our updates or follow us for new articles on financial
            access, provider spotlights, and regulatory changes.
          </p>
          <a href="/contact" className="btn btn-primary">Get Notified</a>
        </article>
      </div>
    </section>
    </>
  );
}