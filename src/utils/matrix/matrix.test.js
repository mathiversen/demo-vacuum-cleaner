import matrix, { randomRelativePosition } from './matrix'

it('it can generate a 10x10 matrix as default', () => {
    let m = matrix(10, 10)
    expect(m.length).toBe(10)
    m.forEach(column => {
        expect(column.length).toBe(10)
    })
})

it('it can generate a 10x20 matrix', () => {
    let m = matrix(10, 20)
    expect(m.length).toBe(10)
    m.forEach(column => {
        expect(column.length).toBe(20)
    })
})

it('it can generate a 10x2 matrix', () => {
    let m = matrix(10, 2)
    expect(m.length).toBe(10)
    m.forEach(column => {
        expect(column.length).toBe(2)
    })
})

it('it can suggest a new random, natural movement, position for a coordinate', () => {
    let m = matrix(10, 10)
    let pos = {
        x: 4,
        y: 4
    }
    let result = randomRelativePosition(pos, m)
    expect(result).toStrictEqual({ x: 5, y: 4 })
})
