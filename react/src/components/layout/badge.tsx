import React from 'react'

interface Typings {
  text: string,
  type?: "success" | "warning" | "error" | "info",
}

/**
 * Creates a Badge, that can be used with other components
 * @param {string} text This is what the badge says.
 * @param {('success'|'warning'|'error'|'info')} [type] Sets the type of badge you want.
 * @returns
*/
export function Badge({
  text,
  type,
}: Typings) {
  return (
    <span className={`badge ${type}`}>{text}</span>
  )
}
