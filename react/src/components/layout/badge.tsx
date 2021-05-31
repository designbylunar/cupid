import React from 'react'

interface Typings {
  text: string,
  type?: "success" | "warning" | "error" | "info",
}

/**
 * Creates an Alert, that can be used with other tools
 * @param text This is what the alert says
 * @param {('success'|'warning'|'error'|'info')} type This is the kind of alert. You can use a
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
