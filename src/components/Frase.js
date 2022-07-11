import styles from './Frase.module.css'

function frase() {
    return (
        <div className={styles.fraseContent}>
            <p>Este é um componente de uma frase</p>
        </div>
    )
}

export default frase