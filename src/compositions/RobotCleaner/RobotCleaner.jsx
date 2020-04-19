import React, { useState, useEffect } from 'react'

import randomNumber from '../../utils/randomNumber/randomNumber'
import { randomRelativePosition } from '../../utils/matrix/matrix'

import Floor from '../../components/Floor'
import Tile from '../../components/Tile'
import Robot from '../../components/Robot'

import programState from './programStates'
import initialState from './initialState'
import RobotCleanerInfo from './RobotCleanerInfo'

export default () => {
    let columns = 10
    let speed = 500
    let rows = 10

    if (window.URLSearchParams) {
        for (let p of new URLSearchParams(window.location.search)) {
            if (p[0] === 'rows') rows = p[1]
            if (p[0] === 'columns') columns = p[1]
            if (p[0] === 'speed') speed = p[1]
        }
    }

    const [ticker, setTicker] = useState(null)
    const [state, setState] = useState(() => initialState(rows, columns))

    const startProgram = () => setTicker(setInterval(() => loop(), speed))
    const stopProgram = () => clearInterval(ticker)

    const hasFinished = () => {
        let flatTiles = state.tiles.flat()
        return (
            flatTiles.map(tile => tile.clean).filter(Boolean).length ===
            flatTiles.length
        )
    }

    const loop = () => {
        if (hasFinished()) {
            stopProgram()
            setState(prev => ({
                ...prev,
                program: programState['ENDED']
            }))
        } else {
            setState(prev => {
                let nextPos = randomRelativePosition(prev.pos, state.tiles)
                let tiles = state.tiles
                tiles[nextPos.y][nextPos.x].clean = true
                return {
                    ...prev,
                    tiles,
                    pos: {
                        ...nextPos
                    },
                    time: {
                        ...prev.time,
                        end: new Date()
                    }
                }
            })
        }
    }

    const handleButtonClick = () => {
        switch (state.program) {
            case programState['INIT']:
                setState(prev => {
                    let pos = {
                        x: randomNumber(0, columns),
                        y: randomNumber(0, rows)
                    }
                    let tiles = state.tiles
                    tiles[pos.y][pos.x].clean = true
                    return {
                        ...prev,
                        tiles,
                        program: programState['RUNNING'],
                        pos,
                        time: {
                            start: new Date(),
                            end: null
                        }
                    }
                })
                break
            case programState['RUNNING']:
                setState(prev => ({
                    ...prev,
                    program: programState['STOPED'],
                    time: {
                        ...prev.time,
                        end: new Date()
                    }
                }))
                break
            case programState['STOPED']:
            case programState['ENDED']:
                setState({ ...initialState(rows, columns) })
        }
    }

    const shouldTileHaveRobot = (pos, tile) => {
        return pos.x === tile.x && pos.y === tile.y
    }

    useEffect(() => {
        switch (state.program) {
            case programState['INIT']:
            case programState['ENDED']:
            case programState['STOPED']:
                stopProgram()
                break
            case programState['RUNNING']:
                startProgram()
        }
    }, [state.program])

    return (
        <main aria-label="Robot cleaner">
            <Floor columns={columns} rows={rows}>
                {state.tiles.map(row =>
                    row.map(tile => (
                        <Tile key={`${tile.x}:${tile.y}`} {...tile}>
                            {shouldTileHaveRobot(state.pos, tile) && <Robot />}
                        </Tile>
                    ))
                )}
            </Floor>
            <RobotCleanerInfo
                pos={state.pos}
                time={state.time}
                state={state.program}
                onClick={handleButtonClick}
            />
        </main>
    )
}
