import React from 'react'

interface ButtonType {
    title: string,
    link?: string,
    type?: "mono" | "error" | "success" | "warning" | "info",
    disabled?: boolean,
}

/**
 * Creates a button element
 * @param {string} title The text displayed on the button
 * @param {string} [link] When the button is clicked, the user is moved to wherever this link is. Incompatible with the « disabled » parameter..
 * @param {("mono" | "error" | "success" | "warning" | "info")} [type] The type of button you want. You can use this optional type to change it to a documented theme such as "mono"
 * @param {boolean} [disabled] If true, the button will be disabled. The « link » parameter will be ignored.
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
