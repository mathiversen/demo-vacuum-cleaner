export default (rows, columns) => {
    let matrix = []
    for (let y = 0; y < rows; y++) {
        let one_row = []
        for (let x = 0; x < columns; x++) {
            one_row.push({
                y,
                x
            })
        }
        matrix.push(one_row)
    }
    return matrix
}

export const randomRelativePosition = ({ x, y }, matrix) => {
    let isValid = false
    let next = randomRelative()

    while (!isValid) {
        if (
            positionExist(x + next.x, y + next.y, matrix) &&
            nextPositionIsNatural(next.x, next.y)
        ) {
            isValid = true
        } else {
            next = randomRelative()
        }
    }

    return {
        x: x + next.x,
        y: y + next.y
    }
}

const randomRelative = () => {
    const possible = [-1, 0, 1]
    if (process.env.NODE_ENV === 'test') {
        return {
            x: 1,
            y: 0
        }
    } else {
        return {
            x: possible[Math.floor(Math.random() * possible.length)],
            y: possible[Math.floor(Math.random() * possible.length)]
        }
    }
}

const positionExist = (x, y, matrix) => {
    return Boolean(matrix[y] && matrix[y][x])
}

const nextPositionIsNatural = (x, y) => {
    return Boolean(Math.abs(x) + Math.abs(y) === 1)
}
