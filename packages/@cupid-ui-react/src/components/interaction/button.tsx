import '../globals.css'
interface ButtonType {
    title: string,
    link?: string
}

export default function Button({
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