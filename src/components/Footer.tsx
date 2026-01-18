import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2026 Med Salim LABBAOUI. Tous droits réservés.</p>
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
    );
};

export default Footer;
