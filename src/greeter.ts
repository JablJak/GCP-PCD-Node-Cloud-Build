const name = process.env['USERNAME']

function greet(): string {
    return `Witaj ${name}`
}

function goodbye(): string {
    return `Żegnaj ${name}`
}

export {greet, goodbye}