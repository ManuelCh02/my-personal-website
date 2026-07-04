import style from "../styles/Footer.module.css"

export function Footer () {
    return (
        <footer className={style.footerContainer}>
            <p>
                Hecho por <a className="githubLink" href="https://github.com/ManuelCh02">ManuelCh02</a>
            </p>
        </footer>
    )
}