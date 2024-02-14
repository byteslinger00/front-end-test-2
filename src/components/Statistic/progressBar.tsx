import styles from '@/styles/Statistic/Statistic.module.css'

type props = {
    percent : number;
}

export default function ProgressBar({percent} : props) {
    return <div className={`${styles.percent} flex-row gap-xs`}>
        <div className="bg-primary rounded-sm" style={{width: `${percent}%`}}></div>
        <div className="bg-secondary-deep rounded-sm" style={{width: `${100-percent}%`}}></div>
    </div>
}