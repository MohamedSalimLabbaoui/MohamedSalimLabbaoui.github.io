import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">À propos de moi</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="intro-text">
                            Bonjour ! Je suis <strong>Med Salim LABBAOUI</strong>, élève ingénieur en informatique à l'<strong>ESPRIT</strong>,
                            passionné par le développement logiciel et les nouvelles technologies.
                        </p>

                        <p>
                            Avec une formation solide en architecture (ENAU) et en ingénierie informatique, j'ai développé une approche unique
                            qui combine créativité et rigueur technique. Mon parcours m'a permis d'acquérir une expertise en développement
                            full-stack, en architectures microservices et en intégration de l'intelligence artificielle.
                        </p>

                        <p>
                            Je suis constamment à la recherche de nouveaux défis techniques et j'aime travailler sur des projets innovants
                            qui repoussent les limites du possible. Ma méthodologie agile (Scrum) et ma maîtrise des outils DevOps me
                            permettent de livrer des solutions robustes et scalables.
                        </p>

                        <div className="highlights-grid">
                            <div className="highlight-card">
                                <div className="highlight-icon">🎓</div>
                                <h3>Étudiant ESPRIT</h3>
                                <p>Ingénierie Informatique</p>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">💻</div>
                                <h3>Full-Stack Developer</h3>
                                <p>Frontend & Backend</p>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">🚀</div>
                                <h3>DevOps Enthusiast</h3>
                                <p>CI/CD, Docker, Kubernetes</p>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">🤖</div>
                                <h3>AI/ML Practitioner</h3>
                                <p>TensorFlow, OpenCV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
