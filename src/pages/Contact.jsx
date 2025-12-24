export default function Contact() {
    return (
      <section className="container page-content">
        <h1>Contact Us</h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Ready to get started or have questions? We'd love to hear from you.</p>
            
            <div className="contact-item">
              <h4>Email</h4>
              <p>hello@patapesa.africa</p>
            </div>
            
            <div className="contact-item">
              <h4>Partnerships</h4>
              <p>partners@patapesa.africa</p>
            </div>
          </div>
          
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    );
  }