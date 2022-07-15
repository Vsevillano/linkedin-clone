import React from 'react'
import { HeaderIcons } from './HeaderIcons'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';

import './styles.css'

export const Header = () => {
  return (
    <header className='header'>
        <nav className='nav'>
            <LinkedInIcon className="logo"/>
            <div className='header__buscar'>
                <SearchIcon/>
                <input type="text" placeholder="Buscar"/>
            </div>
            <HeaderIcons Icon={HomeIcon} title="Home"/>            
            <HeaderIcons Icon={SupervisorAccountIcon} title="Mi red"/>
            <HeaderIcons Icon={BusinessCenterIcon} title="Empleos"/>
            <HeaderIcons Icon={ChatIcon} title="Mensajes"/>
            <HeaderIcons Icon={NotificationsIcon} title="Notificaciones"/>
            <HeaderIcons title="Victoriano Sevillano"/>  
            <HeaderIcons Icon={AppsIcon} title="Productos"/>  
            <HeaderIcons text="Prueba Premium gratis durante 1 mes"/>    
        </nav>
    </header>
  )
}
