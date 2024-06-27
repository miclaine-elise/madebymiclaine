import projects from "./assets/softwareProjects";
import SoftwareProject from "./SoftwareProject";
function Software() {
    return (
        <div className="projects-container">
            {projects.map((project, index) => {
                return (
                    <SoftwareProject project={project} key={index} />
                )
            })}
        </div>
    )
}
export default Software