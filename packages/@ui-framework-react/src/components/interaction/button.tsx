import '../globals.css'

export default function Button({
    title,
    link
}: {
    title: string,
    link?: string
}) {
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