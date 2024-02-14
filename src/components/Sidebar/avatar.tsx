import styles from '@/styles/Sidebar/Sidebar.module.css'

type Props = {
    src: string;
}

export default function Avatar ({src} : Props) {
    return <img src={src} className={`radius-full ${styles.avatar}`}/>
}