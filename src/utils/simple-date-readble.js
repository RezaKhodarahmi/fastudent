import React from 'react'

const SimpleDateFormatter = ({ dateString }) => {
  // Convert the input string to a Date object
  const date = new Date(dateString)

  // Use toLocaleDateString to format the date as "Month DD, YYYY"
  // You might need to adjust the 'en-US' locale and the options to fit your requirements
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return <>{formattedDate}</>
}

export default SimpleDateFormatter
