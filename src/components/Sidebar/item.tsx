import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from '@/styles/Sidebar/Sidebar.module.css'

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    icon: IconProp;
    color: string;
}
export default function SidebarItem({onClick, icon, color} : Props) {
    return <button onClick={onClick} className={`${color} radius-full cursor-pointer ${styles.btn}`}>
        <FontAwesomeIcon icon={icon} className={`${styles.icon}`}/>
    </button>
}