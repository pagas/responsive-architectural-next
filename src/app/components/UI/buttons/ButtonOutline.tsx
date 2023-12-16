import styles from './buttonOutline.module.css'

export default function ButtonOutline({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <button type="button" className={`${styles.btn} ${className}`}>{children}</button>
    )
}
