import React from 'react'

interface Typings {
    title: string,
    subtitle: string,
    reverse?: boolean,

    image?: string,
    imageWidth?: string,
    imageHeight?: string,
    imageDesc?: string,

    children?: React.ReactChild | React.ReactChild[];
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
 * @param {string} imageDesc A short description of what's in the image
 * @param children Although not technically passed, you can specify child elements to the <Card></Card> (eg. <Button/> for the card to be interacted with)
 * @returns 
 */
export function Card({
    title,
    subtitle,
    reverse,

    image,
    imageDesc,

    children
} : CardType) {
  // TODO: Find easier way to reverse cards
  if (reverse) return (
    <div className="card">
      <div className="text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          {children && ({children})}
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
        {children && ({children})}
        </div>
    </div>
  )
}
