import programState from './programStates'
import matrix from '../../utils/matrix/matrix'

const initialTiles = (rows, columns) => {
    let tiles = matrix(rows, columns)
    tiles.forEach(row =>
        row.forEach(tile => {
            tile.clean = false
        })
    )
    return tiles
}

export default (rows, columns) => ({
    tiles: initialTiles(rows, columns),
    time: {
        start: null,
        end: null
    },
    pos: {
        x: null,
        y: null
    },
    program: programState['INIT']
})
