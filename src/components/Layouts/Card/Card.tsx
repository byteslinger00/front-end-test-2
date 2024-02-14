import { ReactNode } from "react";
import styles from '@/styles/Layout/Card.module.css'

type LayoutProps = {
    children: ReactNode;
    option?: string;
    nopadding?: boolean;
    hidden?: boolean;
}

export default function Card ({children, option, nopadding, hidden} : LayoutProps) {
    return(
        <div className={`rounded-lg ${hidden ? 'overflow-hidden' : 'overflow-auto'} ${nopadding ? '' : 'padding'} ${option} ${styles.main}`}>
            {children}
        </div>
    )
}