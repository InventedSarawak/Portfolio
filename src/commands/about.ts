import command from '../../config.json' assert { type: 'json' }

const createAbout = (): string[] => {
    const about: string[] = []
    const SPACE = '&nbsp;'

    const EMAIL = 'Email'
    const GITHUB = 'Github'
    const LINKEDIN = 'Linkedin'
    const INSTAGRAM = 'Instagram'
    const DISCORD = 'Discord'

    const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`
    const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`
    const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`
    const instagram = `<i class='fa-brands fa-instagram'></i> ${INSTAGRAM}`
    const discord = `<i class='fa-brands fa-discord'></i> ${DISCORD}`
    let string = ''

    about.push('<br>')
    command.aboutGreeting.forEach((line) => {
        about.push(line)
    })
    about.push('<br>')
    string += SPACE.repeat(2)
    string += email
    string += SPACE.repeat(Math.max(2, 17 - EMAIL.length))
    string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`
    about.push(string)

    string = ''
    string += SPACE.repeat(2)
    string += github
    string += SPACE.repeat(Math.max(2, 17 - GITHUB.length))
    string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`
    about.push(string)

    string = ''
    string += SPACE.repeat(2)
    string += linkedin
    string += SPACE.repeat(Math.max(2, 17 - LINKEDIN.length))
    string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`
    about.push(string)

    string = ''
    string += SPACE.repeat(2)
    string += instagram
    string += SPACE.repeat(Math.max(2, 17 - INSTAGRAM.length))
    string += `<a target='_blank' href='https://www.instagram.com/${command.social.instagram}'>instagram/${command.social.instagram}</a>`
    about.push(string)

    //discord
    string = ''
    string += SPACE.repeat(2)
    string += discord
    string += SPACE.repeat(Math.max(2, 17 - DISCORD.length))
    string += `<a target='_blank' href='https://discord.com/users/${command.social.discord}'>discord/${command.social.discord}</a>`
    about.push(string)

    about.push('<br>')
    return about
}

export const ABOUT = createAbout()
