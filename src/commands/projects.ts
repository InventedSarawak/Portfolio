import command from '../../config.json' assert { type: 'json' }

const createProject = (): string[] => {
    let string = ''
    const projects: string[] = []
    const SPACE = '&nbsp;'

    // Count total projects across all folders
    const totalProjects = Object.values(command.projects).reduce((total, folder) => total + folder.length, 0)
    const files = `${totalProjects} File(s)`

    projects.push('<br>')

    // Iterate through each folder
    Object.entries(command.projects).forEach(([folderName, projectList]) => {
        // Add folder header
        projects.push(`<span class="keys"> ${folderName}/</span>`)

        // Add projects in this folder
        projectList.forEach((project) => {
            let link = `<a href="${project[2]}" target="_blank">${project[0]}</a>`
            string += SPACE.repeat(4) // Indent projects under folder
            string += link
            string += SPACE.repeat(Math.max(2, 17 - project[0].length))
            string += project[1]
            projects.push(string)
            string = ''
        })

        projects.push('&nbsp;') // Empty line after each folder
    })

    projects.push(files)
    projects.push('<br>')
    return projects
}

export const PROJECTS = createProject()
