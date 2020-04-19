import randomNumber from './randomNumber'

afterAll(() => {
    Math.random.mockRestore()
})

it('it can select the highest value', () => {
    jest.spyOn(Math, 'random').mockImplementation(() => 1)
    let result = randomNumber(1, 10)
    expect(result).toBe(10)
})

it('it can select the lowest value', () => {
    jest.spyOn(Math, 'random').mockImplementation(() => 0)
    let result = randomNumber(1, 10)
    expect(result).toBe(1)
})

it('it can select a value in between', () => {
    jest.spyOn(Math, 'random').mockImplementation(() => 0.55)
    let result = randomNumber(1, 10)
    expect(result).toBe(5)
})
