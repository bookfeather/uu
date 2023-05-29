import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                    <h5 class={styles.footer_text}>
                        Copyright &copy;2023
                    </h5>               
            </div>
        </footer>
    );
}