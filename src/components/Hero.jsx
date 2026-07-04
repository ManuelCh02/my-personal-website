import style from "../styles/Hero.module.css"

export function Hero () {
    return (
        <header className={style.heroContainer}>
            <h1>Manuel Chingay</h1>
            <h2>Desarrollador de Software</h2>
            <p className="muted-text">Creo aplicaciones web confiables, accesibles y rápidas.</p>
        </header>
    )
}