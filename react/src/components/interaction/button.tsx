import React from 'react'

interface ButtonType {
    title: string,
    link?: string,
    disabled?: boolean,
}

/**
 * Creates a button element
 * @param title The text displayed on the button
 * @param link The link the button goes to
 * @param {("mono")} type The type of button you want. You can use this optional type to change it to a documented theme such as "mono"
 * @returns
 */
export function Button({
    title,
    link,
    type,
    disabled
} : ButtonType) {
  if (disabled) return (
    <p title={title} className={type ? `button ${type}` : "button"} aria-disabled="true">
      {title}
    </p>
  )

  if (link) return (
    <a href={link} title={title} className={type ? `button ${type}` : "button"}>
      {title}
    </a>
  )

  return (
    <a title={title} className={type ? `button ${type}` : "button"}>
        {title}
    </a>
  )
}
