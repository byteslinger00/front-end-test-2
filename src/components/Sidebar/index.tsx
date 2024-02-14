import styles from "@/styles/Sidebar/Sidebar.module.css";
import SidebarItem from "./item";
import {
  faBell,
  faBuilding,
  faChessRook,
  faClock,
  faComments,
  faGem,
  faNoteSticky,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import SidebarLayout from "../Layouts/SidebarLayout";
import Avatar from "./avatar";

export default function Sidebar() {
  const handleClickEvent = () => {};
  return (
    <div className={`${styles.layout}`}>
      <div className={`${styles.main}`}>
        <h2 className="text-center">S.</h2>
        <SidebarLayout>
          <SidebarItem
            onClick={handleClickEvent}
            color="btn-secondary"
            icon={faComments}
          />
        </SidebarLayout>
        <SidebarLayout>
          <div className={`${styles.optionsLayout}`}>
            <SidebarItem
              onClick={handleClickEvent}
              color="btn-primary"
              icon={faBuilding}
            />
            <SidebarItem
              onClick={handleClickEvent}
              color="btn-transparent"
              icon={faBell}
            />
            <SidebarItem
              onClick={handleClickEvent}
              color="btn-transparent"
              icon={faClock}
            />
            <SidebarItem
              onClick={handleClickEvent}
              color="btn-transparent"
              icon={faUser}
            />
            <SidebarItem
              onClick={handleClickEvent}
              color="btn-transparent"
              icon={faGem}
            />
            <SidebarItem
              onClick={handleClickEvent}
              color="btn-transparent"
              icon={faGear}
            />
          </div>
        </SidebarLayout>
        <SidebarLayout>
          <div className={`${styles.userLayout}`}>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
            <SidebarItem
              onClick={handleClickEvent}
              color="btn-transparent"
              icon={faArrowRightFromBracket}
            />
          </div>
        </SidebarLayout>
      </div>
    </div>
  );
}
