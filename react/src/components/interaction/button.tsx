import React from 'react'

interface ButtonType {
    title: string,
    link?: string
}

export function Button({
    title,
    link
} : ButtonType) {
    if (link) return (
        <a href={link} title={title} className=".button">
            {title}
        </a>
    )
    return (
        <a title={title} className=".button">
            {title}
        </a>
    )
}
