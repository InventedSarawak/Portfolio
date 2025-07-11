import command from '../../config.json' assert { type: 'json' }

// Function to generate 6-character hash from string
const generateHash = (input: string, index: number): string => {
    const chars = '0123456789abcdef'
    let hash = ''
    const seed = input.length + index * 123 + input.charCodeAt(0) * 456

    for (let i = 0; i < 6; i++) {
        hash += chars[(seed + i * 789) % 16]
    }
    return hash
}

// Function to extract meaningful description from achievement
const getCommitMessage = (achievement: string): string => {
    // Remove emoji and clean up the text
    return achievement
        .replace(
            /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu,
            ''
        )
        .trim()
}

// Function to parse date for sorting
const parseDate = (duration: string): { year: number; month: number; isPresent: boolean } => {
    const startPart = duration.split(' - ')[0].trim()

    if (duration.includes('Present')) {
        // If it's a current role, parse the start date but mark as present
        const [monthStr, yearStr] = startPart.split(' ')
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return {
            year: parseInt(yearStr),
            month: months.indexOf(monthStr),
            isPresent: true
        }
    } else {
        // Parse regular start date
        const [monthStr, yearStr] = startPart.split(' ')
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return {
            year: parseInt(yearStr),
            month: months.indexOf(monthStr),
            isPresent: false
        }
    }
}

const createGitLog = (): string[] => {
    const gitlog: string[] = []
    const SPACE = '&nbsp;'

    gitlog.push('<br>')

    // Convert experience object to array and sort
    const experienceEntries = Object.entries(command.experience)

    // Sort experiences: Present roles first, then by date descending
    const sortedExperience = experienceEntries.sort(([, durationA], [, durationB]) => {
        const dateA = parseDate(durationA)
        const dateB = parseDate(durationB)

        // Present roles come first
        if (dateA.isPresent && !dateB.isPresent) return -1
        if (!dateA.isPresent && dateB.isPresent) return 1

        // If both are present or both are not present, sort by date descending
        if (dateA.year !== dateB.year) {
            return dateB.year - dateA.year
        }
        return dateB.month - dateA.month
    })

    // Process sorted experience from config
    sortedExperience.forEach(([role, duration], index) => {
        const experienceText = `Started Role: ${role}`
        const hash = generateHash(experienceText, index)
        const date = duration
        const commitMessage = getCommitMessage(experienceText)

        gitlog.push(`<span class="keys">commit ${hash}</span>`)
        gitlog.push(`Author:${SPACE.repeat(6)} Vedant Kesarwani <${command.social.email}>`)
        gitlog.push(`Duration: ${SPACE.repeat(3)} ${date}`)
        gitlog.push('')
        gitlog.push(`${commitMessage}`)
        gitlog.push('<br>')
    })

    gitlog.push('(END)')
    gitlog.push('<br>')
    return gitlog
}

export const GITLOG = createGitLog()
