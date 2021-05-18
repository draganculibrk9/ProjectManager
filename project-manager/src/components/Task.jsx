import React from 'react'
import DatePill from './DatePill'
import { unixToLocalTimeString } from '../utils/timeUtils'

const Task = ({ name, description, creation_date, estimate }) => {
    return (
        <div>
            <h3>{name}</h3>
            <DatePill date={unixToLocalTimeString(creation_date)}/>
            <p>Estimated time: <b>{estimate} hour(s)</b></p>
            <i>{description}</i>
        </div>
    )
}

export default Task