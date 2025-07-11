import command from '../../config.json' assert { type: 'json' }

const createSkills = (): string[] => {
    let string = ''
    const skills: string[] = []
    const SPACE = '&nbsp;'

    // Count total skills across all folders
    const totalSkills = Object.values(command.skills).reduce((total, folder) => total + folder.length, 0)
    const files = `${totalSkills} Skill(s)`

    skills.push('<br>')

    // Iterate through each folder
    Object.entries(command.skills).forEach(([folderName, skillList]) => {
        // Add folder header
        skills.push(`<span class="keys"> ${folderName}/</span>`)

        // Add skills in this folder
        skillList.forEach((skill) => {
            string += SPACE.repeat(4) // Indent skills under folder
            string += `<span class="command">${skill[0]}</span>`
            string += SPACE.repeat(Math.max(2, 17 - skill[0].length))
            string += skill[1]
            skills.push(string)
            string = ''
        })

        skills.push('&nbsp;') // Empty line after each folder
    })

    skills.push(files)
    skills.push('<br>')
    return skills
}

export const SKILLS = createSkills()
