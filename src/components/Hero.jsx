import style from "../styles/Hero.module.css"

export function Hero () {
    return (
        <header className={style.heroContainer}>
            <h1>Manuel Chingay</h1>
            <h2>Frontend Software Engineer</h2>
            <p className="muted-text">I build reliable, accessible, and fast web applications.</p>
        </header>
    )
}