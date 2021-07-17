import React from 'react'

interface ModalType {
  title: string,
  subtext: string,
  children: React.ReactChild | React.ReactChild[];
}

/**
 * Creates a modal element
 * @param title The main text that appears at the top of the modal. (eg. the notice being provided)
 * @param subtext The text below the main text that clarifies the title. (eg. blurb about what the modal's action will cause)
 * @param children Although not technically passed, you do need to specify a child element to the <Modal></Modal> (eg. <Button/> for the modal to interact with)
 * @returns 
 */
export function Modal({
  title,
  subtext,
  children
}: ModalType) {
  return (
    <div className="modal">
      <div className="text">
        <h2>{title}</h2>
        <p>{subtext}</p>
      </div>
      <div className="buttons">
        {children}
      </div>
    </div>
  )
}
