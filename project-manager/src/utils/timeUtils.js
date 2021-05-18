import moment from 'moment'

moment.locale()

export const unixToLocalTimeString = (timestamp) => {
    return moment.unix(timestamp).format('LLL')
}

export const getUnixTimestamp = () => {
    return moment().unix()
}