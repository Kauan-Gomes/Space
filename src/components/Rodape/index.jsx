import styles from "./Rodape.module.scss"
import facebook from "./facebook.svg"
import instagram from "./instagram.svg"
import twitter from "./twitter.svg"


export default function Rodape() {
    return (
        <section className={styles.Rodape}>
            <div className={styles.Rodape__redes}>
                <img src={facebook} alt="logo do facebook" />
                <img src={instagram} alt="logo do instagram" />
                <img src={twitter} alt="logo do twitter" />
            </div>
            <div className={styles.Rodape__autor}>
                <h2>Desenvolvido por Kauan Gomes</h2>
            </div>
        </section>
    )
}
