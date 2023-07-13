import React from 'react'

function Button({ onClick, children}) {
  return (
    <div
        className="calc-button"
        onClick={onClick}
    >
        {children}
    </div>
  )
}

export default Button