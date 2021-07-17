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
 * @param title The main text of the card (eg. the name of a project or person)
 * @param subtitle The text below the title. (eg. blurb about project or a person's role at a company)
 * @param buttonText The text displayed on the button
 * @param buttonLink The link the button goes to
 * @param {("mono")} buttonType The type associated with the button
 * @param image The image that appears on the card
 * @param imageWidth The width of the image aforementioned. This must be defined to prevent layout shift.
 * @param imageHeight The height of the image aforementioned. This must be defined to prevent layout shift.
 * @param imageDesc A short description of what's in the image  
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
