import React from 'react'
import { Button } from '../interaction/button'

interface Typings {
    title: string,
    subtitle: string,

    image?: string,
    imageWidth?: string,
    imageHeight?: string,
    imageDesc?: string,
    
    buttonText?: string,
    buttonLink?: string
}

interface WithButton extends Typings {
    buttonText: string,
    buttonLink?: string
}

interface WithImage extends Typings {
  image: string,
  imageWidth: string,
  imageHeight: string,
  imageDesc: string
}

// TODO: Find proper way to do the following (L25-28)
type CardType = (Typings & WithButton) |
                (Typings & WithImage) |
                (Typings & WithButton & WithImage) |
                Typings

export function Card({
    title,
    subtitle,
    buttonText,
    buttonLink,

    image,
    imageWidth,
    imageHeight,
    imageDesc
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
