function SoftwareProject({ project }) {

    return (
        <div className="software-project">
            <div className="software-project-text">
                <h1>{project.title}</h1>
                <p>{project.info}</p>
                <div>
                    <h4>Features</h4>
                    <ul>
                        {project.features.map((feature, index) => {
                            return (
                                <li key={index}>{feature}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className="project-links">
                    <a href={project.link} target="_blank">Check it out!</a>
                    <a href={project.github} target="_blank">GitHub Repo</a>
                </div>
            </div>
            <img src={project.img}></img>
        </div>
    )
}
export default SoftwareProject