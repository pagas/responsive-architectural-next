import styles from './buttonOutline.module.css'

export default function ButtonOutline({
    children,
    className,
    color = 'white'
}: {
    children: React.ReactNode,
    className?: string,
    color: 'white' | 'yellow'
}) {
    const colorStyle = color === 'white' ? styles.white : styles.yellow;
    return (
        <button type="button" className={`${styles.btn} ${className} ${colorStyle}`}>{children}</button>
    )
}
