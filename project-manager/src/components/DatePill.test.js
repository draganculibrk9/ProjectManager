import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DatePill from './DatePill'
import { getUnixTimestamp, unixToLocalTimeString } from '../utils/timeUtils'

test('renders content', () => {
    const date = unixToLocalTimeString(getUnixTimestamp())

    const component = render(
        <DatePill date={date}/>
    )

    expect(component.container).toHaveTextContent(date)
})