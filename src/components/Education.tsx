import './Education.css';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'Diplôme national d\'ingénieur en informatique',
            institution: 'École supérieure privée d\'ingénieurie & de technologies, ESPRIT',
            period: '2022 - 2027',
            location: 'Tunis, Tunisie',
            icon: '🎓',
            highlight: true
        },
        {
            id: 2,
            degree: 'Diplôme national d\'architecture',
            institution: 'École Nationale d\'architecture et d\'urbanisme, ENAU',
            period: '2019 - 2022',
            location: 'Tunis, Tunisie',
            icon: '🏛️'
        },
        {
            id: 3,
            degree: 'Baccalauréat en Mathématiques',
            institution: 'Lycée pilote de Kasserine, LPK',
            period: '2018 - 2019',
            location: 'Kasserine, Tunisie',
            icon: '📚'
        }
    ];

    const languages = [
        { language: 'Arabe', level: 'Langue maternelle', proficiency: 100 },
        { language: 'Français', level: 'Courant', proficiency: 90 },
        { language: 'Anglais', level: 'Courant', proficiency: 85 }
    ];

    const interests = [
        { icon: '🏀', name: 'Basketball', description: 'Joueur professionnel' },
        { icon: '💻', name: 'Open Source', description: 'Contributeur' },
        { icon: '📚', name: 'Apprentissage', description: 'Technologies émergentes' },
        { icon: '🎮', name: 'Game Dev', description: 'Développement de jeux' }
    ];

    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Formation & Compétences</h2>

                {/* Education Timeline */}
                <div className="education-section">
                    <h3 className="subsection-title">Parcours Académique</h3>
                    <div className="timeline">
                        {education.map((edu) => (
                            <div key={edu.id} className={`timeline-item ${edu.highlight ? 'highlight' : ''}`}>
                                <div className="education-card">
                                    <div className="education-icon">{edu.icon}</div>
                                    <div className="education-content">
                                        <h4 className="education-degree">{edu.degree}</h4>
                                        <h5 className="education-institution">{edu.institution}</h5>
                                        <div className="education-meta">
                                            <span className="education-period">📅 {edu.period}</span>
                                            <span className="education-location">📍 {edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div className="languages-section">
                    <h3 className="subsection-title">Langues</h3>
                    <div className="languages-grid">
                        {languages.map((lang) => (
                            <div key={lang.language} className="language-card">
                                <div className="language-header">
                                    <h4>{lang.language}</h4>
                                    <span className="language-level">{lang.level}</span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${lang.proficiency}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interests */}
                <div className="interests-section">
                    <h3 className="subsection-title">Centres d'intérêt</h3>
                    <div className="interests-grid">
                        {interests.map((interest) => (
                            <div key={interest.name} className="interest-card">
                                <div className="interest-icon">{interest.icon}</div>
                                <h4 className="interest-name">{interest.name}</h4>
                                <p className="interest-description">{interest.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
