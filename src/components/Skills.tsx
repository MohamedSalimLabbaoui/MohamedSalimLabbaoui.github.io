import './Skills.css';

const Skills = () => {
    const skillsData = {
        'Languages': ['Java', 'Python', 'JavaScript/TypeScript', 'C/C++', 'PHP', 'SQL', 'Dart'],
        'Frontend': ['Angular', 'React', 'Vue.js', 'JavaFX', 'Bootstrap'],
        'Backend': ['Spring Boot', 'Node.js', 'Express.js', 'Symfony', 'Django', 'Flask'],
        'Databases': ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'Firebase'],
        'AI/ML': ['TensorFlow', 'OpenCV', 'Scikit-learn'],
        'DevOps & Tools': ['Docker', 'Git', 'Postman', 'Maven', 'VS Code', 'IntelliJ', 'Jenkins', 'Grafana', 'Prometheus', 'Kubernetes', 'Minikube'],
        'Architectures': ['Microservices', 'REST APIs', 'MVC', 'AI Integration']
    };

    const categoryIcons = {
        'Languages': '💻',
        'Frontend': '🎨',
        'Backend': '⚙️',
        'Databases': '🗄️',
        'AI/ML': '🤖',
        'DevOps & Tools': '🚀',
        'Architectures': '🏗️'
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Compétences Techniques</h2>

                <div className="skills-grid">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="skill-category">
                            <div className="category-header">
                                <span className="category-icon">{categoryIcons[category]}</span>
                                <h3 className="category-title">{category}</h3>
                            </div>
                            <div className="skills-list">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
