// src/pages/Blog.jsx - FINAL PREMIUM INSIGHTS PAGE (December 26, 2025)
// Authority-building, SEO-optimized, trust-first blog experience
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Sample articles - replace with real content / CMS in production
  const articles = [
    {
      id: 1,
      title: "How to Choose the Best SACCO in Kenya for 2026",
      excerpt: "A step-by-step guide to evaluating dividends, governance, digital access, and regulatory compliance when selecting a savings cooperative.",
      category: "Savings & Money Habits",
      author: "John Kamau",
      authorRole: "CEO & Founder",
      authorImg: "/authors/john.jpg",
      date: "December 20, 2025",
      readTime: "6 min read",
      featured: true,
      image: "/blog/sacco-guide.jpg",
    },
    {
      id: 2,
      title: "Money Market Funds vs Treasury Bills: 2026 Outlook",
      excerpt: "Comparing yields, liquidity, risk, and tax implications in the current high-interest environment.",
      category: "Investments & Wealth",
      author: "Sarah Mwangi",
      authorRole: "Chief Technology Officer",
      authorImg: "/authors/sarah.jpg",
      date: "December 18, 2025",
      readTime: "8 min read",
      featured: false,
      image: "/blog/mmf-vs-tbills.jpg",
    },
    {
      id: 3,
      title: "Building Financial Wellness Programs for Your Team",
      excerpt: "Practical framework for Kenyan SMEs to implement affordable, high-impact financial education and access programs.",
      category: "Business & SMEs",
      author: "David Otieno",
      authorRole: "Chief Product Officer",
      authorImg: "/authors/david.jpg",
      date: "December 15, 2025",
      readTime: "5 min read",
      featured: false,
      image: "/blog/team-wellness.jpg",
    },
    {
      id: 4,
      title: "Understanding Stablecoins: USDT & USDC in African Contexts",
      excerpt: "Beginner-friendly explanation of how stablecoins work, use cases, and safe practices for cross-border payments.",
      category: "PesaFlow™ & Payments",
      author: "Grace Wanjiku",
      authorRole: "Partnerships Lead",
      authorImg: "/authors/grace.jpg",
      date: "December 12, 2025",
      readTime: "7 min read",
      featured: false,
      image: "/blog/stablecoins.jpg",
    },
    {
      id: 5,
      title: "New CBK Guidelines: What They Mean for Digital Lenders",
      excerpt: "Breaking down recent regulatory updates and how compliant platforms like PataPesa are adapting.",
      category: "Regulation & Policy",
      author: "John Kamau",
      authorRole: "CEO & Founder",
      authorImg: "/authors/john.jpg",
      date: "December 10, 2025",
      readTime: "4 min read",
      featured: false,
      image: "/blog/cbk-guidelines.jpg",
    },
  ];

  const categories = [
    "all",
    "Savings & Money Habits",
    "Investments & Wealth",
    "PesaDirect™ & Payments",
    "Business & SMEs",
    "Regulation & Policy",
    "Product Updates",
    "Thought Leadership",
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(a => a.featured);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 5000);
      setEmail("");
    }
  };

  return (
    <>
      {/* 3. HERO SECTION - INSIGHTS THAT EMPOWER */}
      <section className="blog-hero">
        <div className="container">
          <h1>Insights to Help You Make Smarter Financial Decisions</h1>
          <p className="sub">
            Expert analysis, practical guides, and market insights from the PataPesa team and industry leaders.
          </p>

          {/* SEARCH BAR */}
          <div className="blog-search">
            <input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search blog articles"
            />
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredArticle && (
        <section className="featured-article page-section bg-subtle">
          <div className="container">
            <div className="featured-card">
              <div className="featured-image">
                <img src={featuredArticle.image} alt={featuredArticle.title} />
                <span className="category-tag">{featuredArticle.category}</span>
              </div>
              <div className="featured-content">
                <h2>{featuredArticle.title}</h2>
                <p className="excerpt">{featuredArticle.excerpt}</p>
                <div className="meta">
                  <div className="author">
                    <img src={featuredArticle.authorImg} alt={featuredArticle.author} className="author-avatar" />
                    <div>
                      <strong>{featuredArticle.author}</strong>
                      <span>{featuredArticle.authorRole}</span>
                    </div>
                  </div>
                  <span>{featuredArticle.date} • {featuredArticle.readTime}</span>
                </div>
                <Link to={`/blog/${featuredArticle.id}`} className="btn btn-primary">
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FILTERS & CONTENT GRID */}
      <section className="blog-main page-section">
        <div className="container">
          <div className="blog-layout">
            {/* SIDEBAR - FILTERS + NEWSLETTER */}
            <aside className="blog-sidebar">
              <div className="filters">
                <h3>Filter by Category</h3>
                <ul className="category-list">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button
                        className={`filter-btn ${selectedCategory === cat.toLowerCase().replace(/ & /g, "-") ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat === "all" ? "all" : cat)}
                      >
                        {cat === "all" ? "All Articles" : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="newsletter-sidebar">
                <h3>Get the PataPesa Pulse</h3>
                <p>Weekly insights on money, markets, and growth — straight to your inbox.</p>
                <form onSubmit={handleNewsletter}>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary full-width">
                    Subscribe
                  </button>
                </form>
                {emailSubmitted && <p className="success">Thank you! Check your email to confirm.</p>}
                <p className="privacy-note">We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </aside>

            {/* MAIN CONTENT GRID */}
            <div className="blog-grid">
              {filteredArticles.length === 0 ? (
                <p className="no-results">No articles found matching your search.</p>
              ) : (
                filteredArticles.map(article => (
                  <article key={article.id} className="blog-card">
                    <div className="card-image">
                      <img src={article.image} alt={article.title} />
                      <span className="category-tag">{article.category}</span>
                    </div>
                    <div className="card-content">
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <div className="meta">
                        <div className="author">
                          <img src={article.authorImg} alt={article.author} className="author-avatar small" />
                          <div>
                            <strong>{article.author}</strong>
                            <span>{article.authorRole}</span>
                          </div>
                        </div>
                        <span>{article.date} • {article.readTime}</span>
                      </div>
                      <Link to={`/blog/${article.id}`} className="read-more">
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="blog-cta page-section bg-subtle">
        <div className="container">
          <h2>Ready to Put These Insights into Action?</h2>
          <p>Join thousands already accessing better financial services through PataPesa.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary large">Get Started</Link>
            <Link to="/contact" className="btn btn-secondary large">Create Free Account</Link>
          </div>
        </div>
      </section>
    </>
  );
}
