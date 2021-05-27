interface Typings {
  title?: string,
  text: string,
  type: "success" | "warning" | "error" | "info",
}

/**
 * Creates an Alert, that can be used with other tools
 * @param title This goes before the rest of the text and is in bold. Solid for a quick detail, followed by more elaborate information about the alert
 * @param text This is what the alert says
 * @param {('success'|'warning'|'error'|'info')} type This is the kind of alert. You can use a
 */
export default function Alert({
  title,
  text,
  type
}: Typings) {
  return (
    <p className={`alert ${type}`}>
      {title && (<strong>{title}</strong>)}{text}
    </p>
  )
}
