import React from 'react'

interface Typings {
  title?: string,
  text?: string,
  children?: React.ReactChild | React.ReactChild[];
  type: "success" | "warning" | "error" | "info",
}

/**
 * Creates an Alert, that can be used with other tools
 * @param {string} [title] This goes before the rest of the text and is in bold. Solid for a quick detail, followed by more elaborate information about the alert
 * @param {string} [text] This is more information about the title, or the error itself.
 * @param {string} [children] Although not technically passed, you can specify child elements to the <Alert></Alert> (eg. <Button/> for the card to be interacted with). This allows for ease when using Cupid with tools like MDX. This is an alternative to the `text` parameter.
 * @param {('success'|'warning'|'error'|'info')} type This is the kind of alert.
 * @returns
*/
export function Alert({
  title,
  text,
  type,
  children
}: Typings) {
  if (children) return (
    <p className={`alert ${type}`}>
      {title && (<strong>{title}</strong>)}{children}
    </p>
  )
  if (text) return (
    <p className={`alert ${type}`}>
      {title && (<strong>{title}</strong>)}{text}
    </p>
  )
  return new Error("User didn't specify the content of an alert. Ensure you either have children elements or are using the text parameter.")
}
