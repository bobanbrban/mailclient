import React from 'react'


export const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    // eslint-disable-next-line
    <a href="#">
      {children}
    </a>
  )
}

export default Link
