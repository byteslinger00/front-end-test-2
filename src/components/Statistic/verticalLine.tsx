import styles from '@/styles/Statistic/Statistic.module.css'

export default function VerticalLine() {
    return <div className={`${styles.vl} relative`}>
        <p className={`absolute ${styles.vs}`}>vs</p>
    </div>
}