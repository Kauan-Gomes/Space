import search from './search.png'
import styles from './Cabecalho.module.scss'
import { PiPlanet } from 'react-icons/pi'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <h1>
                <PiPlanet
                    size={50} />
                    Space
            </h1>
            <div className={styles.cabecalho__container} >
                <input className={styles.cabecalho__input} type="text"
                    placeholder="O que você procura?" />
                <img src={search} alt="icone de lupa" />

            </div>

        </header>
    )
}