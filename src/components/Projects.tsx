import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Gestion des terrains agricoles (SmartFarm)',
            description: 'Application web et desktop pour la gestion des terrains agricoles avec création d\'une interface desktop. Implémentation des fonctionnalités avancées avec Symfony. Travail en équipe selon une méthodologie agile.',
            technologies: ['Symfony', 'Java', 'JavaFX', 'MySQL', 'Git', 'SCRUM'],
            period: '2024 - 2025',
            icon: '🌾',
            links: {
                github: '#',
                demo: '#'
            }
        },
        {
            id: 2,
            title: 'EasyTravel',
            description: 'Application web en PHP pour la gestion des voyages, réservations et utilisateurs. Interface intuitive et fonctionnalités complètes pour la gestion de voyages.',
            technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Git', 'SCRUM'],
            period: '2023 - 2024',
            icon: '✈️',
            links: {
                github: '#',
                demo: '#'
            }
        },
        {
            id: 3,
            title: 'Bijouterie intelligente',
            description: 'Application desktop de gestion pour bijouterie (Stock, ventes, clients) développée en C++ avec le framework Qt. Interface moderne avec QML.',
            technologies: ['C++', 'Qt', 'QML'],
            period: '2023 - 2024',
            icon: '💎',
            links: {
                github: '#'
            }
        },
        {
            id: 4,
            title: 'Jeu vidéo 2D',
            description: 'Conception d\'un jeu vidéo 2D avec le langage C et la bibliothèque graphique SDL. Programmation procédurale et gestion des événements.',
            technologies: ['C', 'SDL', 'Programmation procédurale'],
            period: '2022 - 2023',
            icon: '🎮',
            links: {
                github: '#'
            }
        },
        {
            id: 5,
            title: 'QoEntum - Mobile App',
            description: 'Application mobile Flutter de suivi de la qualité d\'expérience. Conception de l\'interface utilisateur responsive, intégration des fonctionnalités de mesure réseau et déploiement multiplateforme.',
            technologies: ['Flutter', 'Dart', 'Android', 'iOS'],
            period: 'Été 2023 (Stage)',
            icon: '📱',
            links: {
                demo: '#'
            }
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projets Académiques</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-icon">{project.icon}</div>
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-period">{project.period}</span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.links.github && (
                                        <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.385-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.725.02 1.466.12 2.214.42l-.494 1.644c-.629-.235-1.469-.477-2.249-.477-1.125 0-1.673.631-1.673 1.244 0 .883.869 1.186 2.91 1.917 2.084.738 2.947 1.74 2.947 3.256-.001 1.474-1.062 2.655-2.655 2.925z" />
                                            </svg>
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
