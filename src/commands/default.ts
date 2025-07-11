const createDefault = (): string[] => {
    const defaultMsgArr = [
        '<br>',
        '<span class="errors">COMMAND NOT FOUND</span>',
        "Type <span class='command'>'help'</span> to get started.",
        '<br>'
    ]

    const defaultMsg: string[] = []

    defaultMsgArr.forEach((ele) => {
        defaultMsg.push(ele)
    })

    return defaultMsg
}

export const DEFAULT = createDefault()
