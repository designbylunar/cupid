import React from 'react'

interface ButtonType {
    title: string,
    link?: string,
    type?: string
}

const ButtonTypes = [
  "mono"
]

/**
 * Creates a button element
 * @param title The text displayed on the button
 * @param link The link the button goes to
 * @param type The type of button you want. You can use this optional type to change it to a documented theme such as "mono"
 * @returns button element
 */
export function Button({
    title,
    link,
    type
} : ButtonType) {
  if (type !== undefined)
    if (ButtonTypes.includes(type) === false)
      throw Error("Invalid \"type\" property provided to Cupid UI's Button component. More information may follow.")

    if (link) return (
        <a href={link} title={title} className={type ? `button.${type}` : "button"}>
            {title}
        </a>
    )
    return (
        <a title={title} className="button">
            {title}
        </a>
    )
}
