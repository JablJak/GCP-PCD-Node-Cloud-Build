const name = process.env['NAME']

function greet(): string {
    return `Witaj ${name}`
}

function goodbye(): string {
    return `Żegnaj ${name}`
}

export {greet, goodbye}