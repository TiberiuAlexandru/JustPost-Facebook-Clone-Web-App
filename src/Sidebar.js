import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMore from '@mui/icons-material/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';


function Sidebar() {
  const [{user} , dispatch] = useStateValue();

  return (
    <div className="sidebar">
        <SidebarRow src={user.photoURL} 
        title={user.displayName} 
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={EmojiPeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMore} title="More"/>
    </div>
  );
}

export default Sidebar;