import React from 'react'

interface ButtonType {
    title: string,
    link?: string,
    type?: string
}

const ButtonTypes = [
  "mono"
]

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
