import command from '../../config.json' assert { type: 'json' }

const createAchievements = (): string[] => {
    const achievements: string[] = []
    const SPACE = '&nbsp;'

    achievements.push('<br>')
    achievements.push('<span class="keys">achievements.txt</span>')
    achievements.push('<br>')

    command.achievements.forEach((achievement, index) => {
        let string = ''
        string += SPACE.repeat(2)
        string += `<span class="command">${(index + 1).toString().padStart(2, '0')}.</span>`
        string += SPACE.repeat(2)
        string += achievement
        achievements.push(string)
    })

    achievements.push('<br>')
    achievements.push(`<span class="keys">${command.achievements.length} achievement(s) unlocked</span>`)
    achievements.push('<br>')

    return achievements
}

export const ACHIEVEMENTS = createAchievements()
