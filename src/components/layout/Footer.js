import React from 'react'

function Footer() {
  return (
    <footer className="absolute bg-red-400 ">
      <p>© {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer