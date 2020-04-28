import React from 'react'

const Notification = ({ className, message }) =>
  message === null ? null : (
    <div className={className}>
      {message}
    </div>
  )

export default Notification;