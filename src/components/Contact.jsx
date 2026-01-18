import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setStatus('Message envoyé ! Je vous répondrai bientôt.');
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setStatus('');
        }, 3000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Contactez-moi</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Restons en contact!</h3>
                        <p>
                            Je suis toujours ouvert aux nouvelles opportunités, collaborations ou simplement pour échanger
                            sur les technologies et l'innovation. N'hésitez pas à me contacter!
                        </p>

                        <div className="contact-methods">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:mohamedsalim.labbaoui@esprit.tn">mohamedsalim.labbaoui@esprit.tn</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Téléphone</h4>
                                    <a href="tel:+21654153167">+216 54 153 167</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <a href="https://tn.linkedin.com/in/labbaouii-mohamed-salim-2b36a1271" target="_blank" rel="noopener noreferrer">
                                        Med Salim LABBAOUI
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2c-5.523 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-1.705c0-2.526 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.378h2.773l-.443 2.891h-2.33v6.988c4.78-.75 8.437-4.887 8.437-9.878 0-5.523-4.477-10-10-10z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Localisation</h4>
                                    <p>Tunis, Tunisie</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nom complet</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Votre nom"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="votre.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Sujet</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Sujet de votre message"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Votre message..."
                                rows="5"
                            ></textarea>
                        </div>

                        {status && <div className="form-status">{status}</div>}

                        <button type="submit" className="btn btn-primary submit-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Med Salim LABBAOUI. Tous droits réservés.</p>
                    <div className="footer-social">
                        <a href="https://tn.linkedin.com/in/labbaouii-mohamed-salim-2b36a1271" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="mailto:mohamedsalim.labbaoui@esprit.tn">
                            Email
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
