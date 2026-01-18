import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Développeur Mobile - Flutter',
            company: 'Stage @ Tech Company',
            period: 'Juin - Août 2023',
            location: 'Tunis, Tunisie',
            description: 'Participation au développement de QoEntum, une application de suivi de la qualité d\'expérience (QoE).',
            responsibilities: [
                'Conception de l\'interface utilisateur responsive',
                'Intégration des fonctionnalités de mesure réseau et de latence',
                'Tests et déploiement multiplateforme (Android / iOS)',
                'Collaboration avec l\'équipe en méthodologie agile'
            ],
            technologies: ['Flutter', 'Dart', 'Android', 'iOS']
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Expérience Professionnelle</h2>

                <div className="timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="experience-card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <h4 className="experience-company">{exp.company}</h4>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="experience-period">{exp.period}</span>
                                        <span className="experience-location">📍 {exp.location}</span>
                                    </div>
                                </div>

                                <p className="experience-description">{exp.description}</p>

                                <div className="experience-responsibilities">
                                    <h5>Responsabilités:</h5>
                                    <ul>
                                        {exp.responsibilities.map((resp, index) => (
                                            <li key={index}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="experience-tech">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
