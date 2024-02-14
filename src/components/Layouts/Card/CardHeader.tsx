import { ReactNode } from "react";
import styles from '@/styles/Layout/Card.module.css'

type LayoutProps = {
    children: ReactNode;
}

export default function CardHeader ({children} : LayoutProps) {
    return(
        <div className={`${styles.header}`}>
            {children}
        </div>
    )
}