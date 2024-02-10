import React from 'react'

// Helper function to add hours and minutes to a time string
const addTime = (time, addHours, addMinutes) => {
  let [hours, minutes, seconds] = time.split(':').map(Number)
  hours += addHours
  minutes += addMinutes

  // Handle minute overflow
  if (minutes >= 60) {
    hours += Math.floor(minutes / 60)
    minutes %= 60
  }

  // Handle hour overflow (for going past 24 hours)
  hours %= 24

  // Format hours, minutes, and seconds to two digits
  const formattedHours = hours.toString().padStart(2, '0')
  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

// Vancouver is 3 hours behind Toronto
export const VancouverTime = ({ torontoTime }) => {
  const vancouverTime = addTime(torontoTime, -3, 0)

  return <>{vancouverTime}</>
}

// Tehran is 8.5 hours ahead of Toronto
export const TehranTime = ({ torontoTime }) => {
  const tehranTime = addTime(torontoTime, 8, 30)

  return <>{tehranTime}</>
}
