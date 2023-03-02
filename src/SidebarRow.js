import React from 'react';
import "./SidebarRow.css";
import { Avatar} from "@mui/material";

function SidebarRow({src, Icon, title}) {
  return (
    <div className="sidebarRow">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}

        <p>{title}</p>
    </div>
  )
}

export default SidebarRow
