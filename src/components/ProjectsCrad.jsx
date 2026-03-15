import '../styles/project.css';
const ProjectsCrad = ({ inView, index, pro }) => {
    const {   title, tag, Year, desc, stack, accentColor, liveLink, githubLink } = pro;
    return (

        <div className='project-card' style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)", transitionDelay: `${index * 100}ms`, "--accent": accentColor, }} onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${accentColor}44`,
                e.currentTarget.style.boxShadow = `0 0 40px ${accentColor}18`;
        }} onMouseLeave={(e) => {
            e.currentTarget.style.border = "rgba(255,255,255,0.07)",
                e.currentTarget.style.boxShadow = "none"
        }} >

            <div className='project-card-top'>
                <div>
                    <span className='project-card-meta' style={{ color: accentColor }}>{tag} . {Year}</span>
                    <h3 className='project-card-title'>{title}</h3>
                </div>

                <div className='project-card-links'>
                    <a href={githubLink} className='project-card-icon-btn'
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.color = accentColor; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#aaa"; }}
                    >⌥</a>
                    <a href={liveLink} className='project-card-icon-btn'
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.color = accentColor; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#aaa"; }}>↗</a>
                </div>
            </div>

            <p className='project-card-desc'>{desc}</p>
            <div className='project-card-stack'>
                {stack.map((s) => (
                    <span className='project-card-badge' style={{ background: `${accentColor}14`, border: `1px solid ${accentColor}30`, color: accentColor }}
                    >{s}</span>
                ))}
            </div>
        </div>
    );
}

export default ProjectsCrad