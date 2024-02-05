import { addMinutes, format, setHours, setMinutes } from 'date-fns'

export function generateTimeOfDayList(date: Date) {
  const startTime = setHours(setMinutes(date, 0), 9)
  const endTime = setHours(setMinutes(date, 0), 21)

  const timeOfDayList: string[] = []
  const INTERVAL_IN_MINUTES = 45
  let currentTime = startTime

  while (currentTime <= endTime) {
    timeOfDayList.push(format(currentTime, 'HH:mm'))
    currentTime = addMinutes(currentTime, INTERVAL_IN_MINUTES)
  }

  return timeOfDayList
}
