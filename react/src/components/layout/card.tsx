import React from 'react'
import { Button } from '../interaction/button'
import './card.css'

interface Typings {
    title: string,
    image?: string,
    subtitle: string,
    // TODO: replace `any` with proper typings
    buttonText?: any,
    buttonLink?: any
}

interface WithButton extends Typings {
    buttonText: string,
    buttonLink?: string
}

type CardType = (Typings & WithButton) | Typings

export function Card({
    title,
    image,
    subtitle,
    buttonText,
    buttonLink
} : CardType) {
    return (
        <div className="card">
            <img src={image} className="card.image" />
            <div className="card.text">
                <h2 className="card.title">{title}</h2>
                <p className="card.subtitle">{subtitle}</p>
                {buttonLink && buttonText && (
                    <Button
                        title={buttonText}
                        link={buttonLink}
                    />
                )}
                {buttonText && (
                    <Button
                        title={buttonText}
                    />
                )}
            </div>
        </div>
    )
}
