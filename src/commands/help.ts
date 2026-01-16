const helpObj = {
    commands: [
        ["'aboutme'", 'Know about yo boi', false],
        ["'get cache-miss'", 'Go to my blog.', false],
        ["'ls -a projects'", 'The projects that have left my github private.', false],
        ["'ls -a skills'", 'Display my technical skills and expertise.', false],
        ["'git log'", 'Display my experience.', false],
        ["'cat achievements.txt'", 'Display the achievements.', false],
        ["'get resume'", 'Open my resume.', true],
        ["'sudo'", 'Felt lazy? Also dont do something crazy.', false],
        ["'curl repo'", 'Repo of the site.', false],
        ["'neofetch'", 'Display the banner.', false],
        ["'clear'", 'Its in the name, isnt it?', false],
        ["'whoami'", 'Display your username.', false],
        ["'exit'", 'Exit the terminal.', true],
        ["'linkedin'", 'Who likes clicking links.', false],
        ["'github'", 'The same reason as above.', false],
        ["'leetcode'", 'Its obvious, isnt it?', false],
        ["'discord'", 'How many times do I tell you.', false],
        ["'instagram'", 'You dont get it do you?', true],
    ]
}

const createHelp = (): string[] => {
    const help: string[] = []
    help.push('<br>')

    helpObj.commands.forEach((ele) => {
        const SPACE = '&nbsp;'
        let string = ''
        string += SPACE.repeat(2)
        string += "<span class='command'>"
        string += ele[0]
        string += '</span>'
        string += SPACE.repeat(Math.max(2, 25 - (ele[0] as string).length))
        string += ele[1]
        help.push(string)

        // Add spacing if the third parameter is true
        if (ele[2] === true) {
            help.push('&nbsp;')
        }
    })

    help.push('<br>')
    help.push("Press <span class='keys'>[Tab]</span> for auto completion.")
    help.push("Press <span class='keys'>[Esc]</span> to clear the input line.")
    help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.")
    help.push('<br>')
    return help
}

export const HELP = createHelp()
