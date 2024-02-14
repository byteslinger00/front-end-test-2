import { ReactNode } from "react";
import styles from "@/styles/Layout/Container.module.css";

type LayoutProps = {
    children: ReactNode;
}

export default function ContainerLayout ({children} : LayoutProps) {
    return(
        <div className={`${styles.container}`}>
            {children}
        </div>
    )
}