import React from 'react'
import dayjs from 'dayjs'

import Button from '../../components/Button'
import Info from '../../components/Info'
import programStates from './programStates'

export default ({ pos, time, state, onClick }) => {
    const displayTime = () => {
        if (time.start && time.end) {
            let difference = Math.abs(
                Math.round((time.end.getTime() - time.start.getTime()) / 1000)
            )
            return difference > 0
                ? state === programStates['ENDED']
                    ? `Complete: ${dayjs.unix(difference).format('mm:ss')}`
                    : `Time: ${dayjs.unix(difference).format('mm:ss')}`
                : 'Time: 00:00'
        } else {
            return 'Time: 00:00'
        }
    }

    const positionText =
        pos.x != null && pos.y != null
            ? `Position: ${pos.x}:${pos.y}`
            : 'Position: '

    let buttonText = null
    switch (state) {
        case programStates['INIT']:
            buttonText = 'Start'
            break
        case programStates['RUNNING']:
            buttonText = 'Stop'
            break
        case programStates['STOPED']:
        case programStates['ENDED']:
            buttonText = 'Restart'
            break
    }

    return (
        <Info>
            <span>{positionText}</span>
            <Button state={state} onClick={onClick}>
                {buttonText}
            </Button>
            <span>{displayTime()}</span>
        </Info>
    )
}
