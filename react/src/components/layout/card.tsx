import React from 'react'

interface Typings {
    title: string,
    subtitle: string,
    reverse?: boolean,

    image?: string,
    imageWidth?: string,
    imageHeight?: string,
    imageDesc?: string,
}

interface WithImage extends Typings {
  image: string,
  imageWidth: string,
  imageHeight: string,
  imageDesc: string
}

// TODO: Find proper way to do the following
type CardType = (Typings & WithImage) | Typings

/**
 * Creates a card element
 * @param {string} title The main text of the card (eg. the name of a project or person)
 * @param {string} subtitle The text below the title. (eg. blurb about project or a person's role at a company)
 * @param {boolean} [reverse] If true, the order will be flipped (text and then the image). This has no effect if you are not using an image. 
 * @param {string} image The image that appears on the card
 * @param {string} imageWidth The width of the image aforementioned. This must be defined to prevent layout shift.
 * @param {string} imageHeight The height of the image aforementioned. This must be defined to prevent layout shift.
 * @param {string} imageDesc A short description of what's in the image
 * @returns 
 */
export function Card({
    title,
    subtitle,
    reverse,

    image,
    imageWidth,
    imageHeight,
    imageDesc
} : CardType) {
  // TODO: Find easier way to reverse cards
  if (reverse) return (
    <div className="card">
      <div className="text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          {buttonText && (
              <Button
                  title={buttonText}
                  link={buttonLink ? buttonLink : "#"}
                  type={buttonType}
              />
          )}
      </div>
      {image && (
        <img
          src={image}
          width={imageWidth}
          height={imageHeight}
          alt={imageDesc}
        />
      )}
    </div>
  )
  return (
    <div className="card">
      {image && (
        <img
          src={image}
          width={imageWidth}
          height={imageHeight}
          alt={imageDesc}
        />
      )}
      <div className="text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {buttonText && (
          <Button
              title={buttonText}
              link={buttonLink ? buttonLink : "#"}
              type={buttonType}
          />
        )}
        </div>
    </div>
  )
}
