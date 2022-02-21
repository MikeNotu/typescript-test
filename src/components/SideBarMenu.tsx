import { useState } from "react"
import { SideBarMenuCard,SideBarMenuItem } from "../types/types"
import {classNames} from "../util/classes";
import {VscMenu} from "react-icons/vsc";

interface SideBarMenuProps{
    items:SideBarMenuItem[];
    card: SideBarMenuCard;
}

export default function SideBarMenu({items,card}: SideBarMenuProps){
    const [isOpen,setIsOpen] = useState<boolean>(true);
    return <div
    className={classNames("SideBarMenu",isOpen? "expanded": "collapsed")}>

        <div className="menuButton">
            <button><VscMenu /></button>
        </div>
    </div> 
}