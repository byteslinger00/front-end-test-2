import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
}

export default function SidebarLayout ({children} : LayoutProps) {
    return(
        <div className={`flex-row justify-center`}>
            {children}
        </div>
    )
}